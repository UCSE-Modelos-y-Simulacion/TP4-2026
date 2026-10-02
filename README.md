# 📊 TP4 - Pruebas Estadísticas de Media, Varianza y Uniformidad

**Cátedra:** Modelos y Simulación  
**Institución:** Universidad Católica de Santiago del Estero (UCSE)  
**Módulo:** Unidad 2 - Ajuste de Datos y Validación Conceptual

## 🎯 Objetivo
El propósito de este Trabajo Práctico es desarrollar destrezas en la validación de conjuntos de datos estocásticos para verificar empíricamente si provienen de una distribución Uniforme mediante contrastes de hipótesis. Las pruebas a estudiar incluyen:
1. **Prueba de Medias (Test Z)**
2. **Prueba de Varianza (Test Chi-Cuadrada $\chi^2$)**
3. **Prueba de Uniformidad Chi-Cuadrada**
4. **Prueba de Kolmogorov-Smirnov (K-S)**

## 🚀 Flujo de Trabajo
1. Abre el archivo `index.html` haciendo doble clic. No requiere servidor local.
2. Selecciona la pestaña de tu ejercicio asignado (ver tabla inferior).
3. Introduce tu número de **Legajo** cuando se te solicite.
4. Efectúa los cálculos de forma manual o en Excel (usando 4 decimales redondeados).
5. Completa el formulario en el panel *Workbench de Cómputo*.
6. Al obtener **100/100**, el sistema descargará el archivo `comprobante_tp4_ejercicio_XX_legajo.json`.
7. Guarda este archivo en la carpeta `entregas/` de este repositorio.
8. Realiza `git add`, `git commit` y `git push` a GitHub para que el Auto-Grader verifique tu solución y te otorgue la calificación ✅.

---

## 🧑‍🎓 Matriz de Asignación Individualizada

| Alumno | Tema Asignado | Datos (N, $\alpha$, etc.) | Resultado Esperado ($H_0$) |
| :--- | :--- | :--- | :--- |
| **Alumno #1** | Prueba de Medias (Z) | Serie A, $N=40$, $\alpha=5\%$ | Acepta $H_0$ |
| **Alumno #2** | Prueba de Varianza ($\chi^2$) | Serie B, $N=30$, $\alpha=5\%$ | Rechaza $H_0$ |
| **Alumno #3** | Prueba de Uniformidad ($\chi^2$) | Serie C, $N=50$, $m=5$ clases, $\alpha=5\%$ | Acepta $H_0$ |
| **Alumno #4** | Prueba de Uniformidad (Kolmogorov-Smirnov) | Serie D, $N=20$, $\alpha=10\%$ | Acepta $H_0$ |
| **Alumno #5** | Prueba de Medias (Z) | Serie E, $N=50$, $\alpha=1\%$ | Rechaza $H_0$ |
| **Alumno #6** | Prueba de Varianza ($\chi^2$) | Serie F, $N=31$, $\alpha=10\%$ | Acepta $H_0$ |
| **Alumno #7** | Prueba de Uniformidad ($\chi^2$) | Serie G, $N=100$, $m=10$ clases, $\alpha=1\%$ | Rechaza $H_0$ |

## 🧪 Evaluación Local

Si deseas verificar el funcionamiento del evaluador antes de subir tu trabajo, ejecuta:
- **Windows:** Doble clic en `test.bat`
- **Linux/Mac:** Ejecutar `./test.sh`

---
> 🔐 **Zero-Knowledge Architecture:** Las soluciones maestras no están presentes en este repositorio. Todo el proceso de autoevaluación es validado en el navegador mediante funciones criptográficas criptográficas *SHA-256*.
