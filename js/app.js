const TYPE_CONFIGS = {
    "media": {
        title: "Prueba de Medias (Z)",
        fields: [
            { id: "media", label: "Media Muestral (x̄)", type: "number", step: "0.0001" },
            { id: "Z0", label: "Estadístico Z0", type: "number", step: "0.0001" },
            { id: "Z_crit", label: "Z Crítico", type: "number", step: "0.0001" },
            { id: "conclusion", label: "Conclusión", type: "select", options: ["ACEPTA", "RECHAZA"] }
        ],
        desc: "Mediante un contraste de hipótesis, verifique estadísticamente si el valor esperado (Media Muestral) de la secuencia proporcionada difiere significativamente del valor poblacional esperado para una distribución Uniforme estándar (µ=0.5).",
        biblio: "García Dunna, Cap. 3 (pp. 58-60) | Diapositivas U2 (Ing. Vázquez)"
    },
    "varianza": {
        title: "Prueba de Varianza (Chi²)",
        fields: [
            { id: "media", label: "Media Muestral (x̄)", type: "number", step: "0.0001" },
            { id: "varianza", label: "Varianza Muestral (S²)", type: "number", step: "0.0001" },
            { id: "chi2_0", label: "Estadístico Chi²_0", type: "number", step: "0.0001" },
            { id: "chi2_inf", label: "Límite Inferior (Chi²)", type: "number", step: "0.0001" },
            { id: "chi2_sup", label: "Límite Superior (Chi²)", type: "number", step: "0.0001" },
            { id: "conclusion", label: "Conclusión", type: "select", options: ["ACEPTA", "RECHAZA"] }
        ],
        desc: "Determine si el grado de dispersión térmica (Varianza Muestral) de la serie de números pseudoaleatorios es estadísticamente coherente con la varianza teórica de una distribución Uniforme (σ²=1/12), calculando los límites de aceptación de la distribución Chi-Cuadrada.",
        biblio: "García Dunna, Cap. 3 (pp. 61-63) | Diapositivas U2 (Ing. Vázquez)"
    },
    "uni_chi2": {
        title: "Uniformidad (Chi²)",
        fields: [
            { id: "chi2_0", label: "Estadístico Chi²_0", type: "number", step: "0.0001" },
            { id: "chi2_crit", label: "Chi² Crítico", type: "number", step: "0.0001" },
            { id: "conclusion", label: "Conclusión", type: "select", options: ["ACEPTA", "RECHAZA"] }
        ],
        desc: "Compruebe la bondad de ajuste de la muestra determinando si se distribuye uniformemente en el intervalo (0,1). Para ello, agrupe los datos en <i>m</i> subintervalos y compare las frecuencias observadas contra las frecuencias esperadas utilizando la prueba de bondad Chi-Cuadrada.",
        biblio: "García Dunna, Cap. 3 (pp. 65-68) | Coss Bu, Cap. 3 (pp. 55-60)"
    },
    "uni_ks": {
        title: "Uniformidad (K-S)",
        fields: [
            { id: "D_plus", label: "D+ Máximo", type: "number", step: "0.0001" },
            { id: "D_minus", label: "D- Máximo", type: "number", step: "0.0001" },
            { id: "D", label: "Estadístico D", type: "number", step: "0.0001" },
            { id: "D_crit", label: "D Crítico", type: "number", step: "0.0001" },
            { id: "conclusion", label: "Conclusión", type: "select", options: ["ACEPTA", "RECHAZA"] }
        ],
        desc: "Ejecute la prueba no paramétrica de Kolmogorov-Smirnov para contrastar la distribución de probabilidad acumulada teórica con la frecuencia acumulada empírica de la muestra ordenada. Ideal para secuencias donde N < 50.",
        biblio: "Coss Bu, Cap. 3 (pp. 61-65) | Diapositivas U2 (Ing. Vázquez)"
    }
};

const SECRET_SALT = "MODELOS_SIMULACION_UCSE_2026_CATEDRA_SECRET_SALT";
let currentLegajo = "github-classroom";
let currentAsignacion = "asignacion_1";

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    document.getElementById("btn-validate-all").addEventListener("click", validateAll);
});

function initApp() {
    renderTabs();
    loadAsignacion(currentAsignacion);
}

function renderTabs() {
    const tabsContainer = document.getElementById("exercise-tabs");
    tabsContainer.innerHTML = "";
    Object.keys(TP4_RUBRIC).forEach((asigKey) => {
        const btn = document.createElement("button");
        btn.textContent = TP4_RUBRIC[asigKey].titulo;
        btn.className = `px-4 py-2 rounded-t-lg font-medium text-sm transition-colors ${currentAsignacion === asigKey ? 'bg-gray-800 text-primary border-t-2 border-primary' : 'bg-gray-900/50 text-gray-400 hover:text-gray-200'}`;
        btn.onclick = () => {
            currentAsignacion = asigKey;
            renderTabs();
            loadAsignacion(currentAsignacion);
        };
        tabsContainer.appendChild(btn);
    });
}

function loadPart(suffix, dataPart) {
    const typeConf = TYPE_CONFIGS[dataPart.tipo];
    
    // Panel de enunciados y bibliografía
    const panelHtml = `
        <div class="mb-4">
            <h4 class="font-[Outfit] text-lg text-primary mb-1">${typeConf.title}</h4>
            <p class="text-sm text-gray-300 leading-relaxed mb-3">${typeConf.desc}</p>
            <div class="bg-gray-900/50 rounded-lg p-2 flex items-center gap-2 border border-gray-700">
                <svg class="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                <span class="text-xs font-mono text-gray-400">Ref: ${typeConf.biblio}</span>
            </div>
            <div class="mt-3 text-sm text-gray-400"><strong>Tamaño Muestral:</strong> N = ${dataPart.datos.length}</div>
        </div>
    `;
    
    document.getElementById(`enunciado-desc-${suffix}`).innerHTML = panelHtml;
    document.getElementById(`datos-raw-${suffix}`).innerHTML = dataPart.datos.map(d => `<span class="inline-block w-16 mr-2 mb-1">${d.toFixed(4)}</span>`).join('');
    
    const form = document.getElementById(`calc-form-${suffix}`);
    form.innerHTML = "";
    typeConf.fields.forEach(f => {
        const div = document.createElement('div');
        div.className = "flex flex-col";
        const label = document.createElement('label');
        label.className = "text-sm text-gray-300 mb-1";
        label.innerText = f.label;
        
        let input;
        if(f.type === "select") {
            input = document.createElement('select');
            input.innerHTML = `<option value="">-- Seleccionar --</option>` + f.options.map(o => `<option value="${o}">${o}</option>`).join('');
        } else {
            input = document.createElement('input');
            input.type = "number";
            input.step = f.step;
            input.placeholder = "0.0000";
        }
        input.id = `input-${suffix}-${f.id}`;
        input.className = "bg-gray-900/50 border border-gray-600 rounded px-3 py-2 text-white font-mono text-sm focus:border-primary focus:outline-none";
        
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
    });

    if(window.renderChart) window.renderChart(`graficoCanvas-${suffix}`, dataPart.tipo, dataPart.datos);
}

function loadAsignacion(asigKey) {
    const data = TP4_RUBRIC[asigKey];
    loadPart('A', data.ejA);
    loadPart('B', data.ejB);
}

async function validatePart(suffix, asigKey, partKey) {
    const dataPart = TP4_RUBRIC[asigKey][partKey];
    const typeConf = TYPE_CONFIGS[dataPart.tipo];
    const hashesData = dataPart.hashes;
    
    let allCorrect = true;
    let respuestas = {};

    for(let f of typeConf.fields) {
        let val = document.getElementById(`input-${suffix}-${f.id}`).value;
        if(f.type === 'number') {
            if(!val) val = "0";
            val = Number(val).toFixed(4);
        }
        respuestas[f.id] = val;
        
        const expectedHash = hashesData[f.id];
        const actualHash = await sha256(`${asigKey}_${suffix}:${f.id}:${val}:${SECRET_SALT}`);
        
        const inputEl = document.getElementById(`input-${suffix}-${f.id}`);
        if(actualHash === expectedHash) {
            inputEl.classList.remove("border-red-500", "border-gray-600");
            inputEl.classList.add("border-green-500");
        } else {
            inputEl.classList.remove("border-green-500", "border-gray-600");
            inputEl.classList.add("border-red-500");
            allCorrect = false;
        }
    }
    return { allCorrect, respuestas };
}

async function validateAll() {
    const resA = await validatePart('A', currentAsignacion, 'ejA');
    const resB = await validatePart('B', currentAsignacion, 'ejB');
    
    if(resA.allCorrect && resB.allCorrect) {
        Swal.fire({
            title: '¡Cálculos Correctos!',
            text: 'Ambos ejercicios son precisos. Generando comprobante firmado...',
            icon: 'success',
            background: '#111827',
            color: '#fff',
            confirmButtonColor: '#8b5cf6'
        }).then(async () => {
            const respFinal = { ejA: resA.respuestas, ejB: resB.respuestas };
            const hashFirma = await sha256(`${currentLegajo}:${currentAsignacion}:${JSON.stringify(respFinal)}:${SECRET_SALT}`);
            const payload = {
                legajo: currentLegajo,
                asignacion: currentAsignacion,
                timestamp: new Date().toISOString(),
                respuestas: respFinal,
                firma: hashFirma
            };
            
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 4));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `comprobante_tp4_${currentAsignacion}_${currentLegajo}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
        });
    } else {
        Swal.fire({
            title: 'Cálculos Incorrectos',
            text: 'Revisa los campos resaltados en rojo en los ejercicios.',
            icon: 'error',
            background: '#111827',
            color: '#fff',
            confirmButtonColor: '#ef4444'
        });
    }
}
