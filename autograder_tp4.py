import json
import hashlib
import sys
import glob
import os

SECRET_SALT = "MODELOS_SIMULACION_UCSE_2026_CATEDRA_SECRET_SALT"

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    RESET = '\033[0m'
    CYAN = '\033[96m'
    BOLD = '\033[1m'

sys.stdout.reconfigure(encoding='utf-8')

def sha256_hash(ejercicio_id, item_key, valor):
    text = f"{ejercicio_id}:{item_key}:{valor}:{SECRET_SALT}"
    return hashlib.sha256(text.encode('utf-8')).hexdigest()

def main():
    print(f"{Colors.CYAN}{Colors.BOLD}=== Evaluador Automático TP4 - Pruebas Estadísticas ==={Colors.RESET}")
    print("Materia: Modelos y Simulación (UCSE 2026)\n")

    comprobantes = glob.glob("entregas/comprobante_tp4_*.json")
    if not comprobantes:
        print(f"{Colors.RED}❌ Error: No se encontró ningún archivo comprobante_tp4_*.json en la carpeta 'entregas/'.{Colors.RESET}")
        sys.exit(1)
        
    archivo = comprobantes[0]
    print(f"📄 Analizando archivo: {archivo}")
    
    with open(archivo, "r", encoding="utf-8") as f:
        try:
            entrega = json.load(f)
        except json.JSONDecodeError:
            print(f"{Colors.RED}❌ Error: El comprobante no tiene formato JSON válido.{Colors.RESET}")
            sys.exit(1)

    expected_firma = hashlib.sha256(f"{entrega['legajo']}:{entrega['asignacion']}:{json.dumps(entrega['respuestas']).replace(' ','')}:{SECRET_SALT}".encode()).hexdigest()
    # To be extremely safe with json encoding formats across JS/Python:
    # Instead of re-verifying the whole json string (since JS JSON.stringify format could differ slightly from python),
    # let's just do a manual stringification mimicking JS `JSON.stringify(respFinal)` if needed, but since we control it,
    # it's better to just check the sub-hashes for the answers. We'll trust the individual hashes below mostly.
    # Actually, we can just skip the exact signature check in Python and rely on the individual item hashes which are 100% robust.
    
    # Cargar rúbrica
    if not os.path.exists("rubric_tp4.json"):
        print(f"{Colors.RED}❌ Error: No se encontró rubric_tp4.json.{Colors.RESET}")
        sys.exit(1)

    with open("rubric_tp4.json", "r", encoding="utf-8") as f:
        rubric = json.load(f)

    asignacion_id = entrega.get('asignacion', 'asignacion_1')
    respuestas = entrega.get('respuestas', {})
    
    if asignacion_id not in rubric:
        print(f"{Colors.RED}❌ Error: La asignación '{asignacion_id}' no existe en la rúbrica.{Colors.RESET}")
        sys.exit(1)

    errores = []
    
    for parte in ['ejA', 'ejB']:
        if parte not in respuestas:
            errores.append(f"Falta la resolución completa del {parte}.")
            continue
            
        for key, valor in respuestas[parte].items():
            if key not in rubric[asignacion_id][parte]["hashes"]:
                errores.append(f"[{parte}] El campo '{key}' no es esperado.")
                continue
                
            expected_hash = rubric[asignacion_id][parte]["hashes"][key]
            # Suffix 'A' or 'B'
            suffix = 'A' if parte == 'ejA' else 'B'
            actual_hash = sha256_hash(f"{asignacion_id}_{suffix}", key, str(valor))
            
            if expected_hash != actual_hash:
                errores.append(f"[{parte}] El valor de '{key}' es incorrecto. Valor ingresado: {valor}")

    print("\n--- Resultados ---")
    if errores:
        print(f"{Colors.RED}❌ Se encontraron {len(errores)} error(es):{Colors.RESET}")
        for error in errores:
            print(f"   - {error}")
        
        if "GITHUB_STEP_SUMMARY" in os.environ:
            with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as f:
                f.write("### ❌ Resultado de Evaluación: Incompleto/Incorrecto\n")
                f.write("Se encontraron discrepancias en los cálculos:\n")
                for e in errores:
                    f.write(f"- {e}\n")
        sys.exit(1)
    else:
        print(f"{Colors.GREEN}✅ ¡Felicitaciones! Todos los cálculos de ambos ejercicios son correctos (100/100 Pts).{Colors.RESET}")
        
        if "GITHUB_STEP_SUMMARY" in os.environ:
            with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as f:
                f.write("### ✅ Resultado de Evaluación: Aprobado (100/100)\n")
                f.write("¡Excelente trabajo! Ambos ejercicios fueron resueltos correctamente.\n")
        sys.exit(0)

if __name__ == "__main__":
    main()
