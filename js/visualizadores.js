let charts = {};

window.renderChart = function(canvasId, tipo, datosRaw) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    if (charts[canvasId]) {
        charts[canvasId].destroy();
    }

    Chart.defaults.color = '#9ca3af';
    Chart.defaults.font.family = "'Inter', sans-serif";

    if(tipo === "uni_chi2") {
        const m = datosRaw.length >= 50 ? 10 : 5; // roughly infer m
        let counts = new Array(m).fill(0);
        datosRaw.forEach(val => {
            let bin = Math.floor(val * m);
            if(bin === m) bin--; 
            counts[bin]++;
        });
        const labels = Array.from({length: m}, (_, i) => `[${(i/m).toFixed(1)} - ${((i+1)/m).toFixed(1)})`);
        
        charts[canvasId] = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Frecuencia Observada (Oi)',
                    data: counts,
                    backgroundColor: 'rgba(6, 182, 212, 0.6)',
                    borderColor: 'rgba(6, 182, 212, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                }, {
                    label: 'Frecuencia Esperada (Ei)',
                    data: new Array(m).fill(datosRaw.length / m),
                    type: 'line',
                    borderColor: 'rgba(139, 92, 246, 1)',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointStyle: 'circle'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } }
            }
        });
    } 
    else if(tipo === "uni_ks") {
        let sorted = [...datosRaw].sort((a,b) => a - b);
        let n = sorted.length;
        let cdfEmpirica = sorted.map((v, i) => ({x: v, y: (i+1)/n}));
        let cdfTeorica = [{x:0, y:0}, {x:1, y:1}];

        charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Distribución Empírica F(x)',
                    data: cdfEmpirica,
                    borderColor: 'rgba(6, 182, 212, 1)',
                    backgroundColor: 'rgba(6, 182, 212, 0.5)',
                    stepped: true,
                    borderWidth: 2
                },
                {
                    label: 'Distribución Teórica Uniforme',
                    data: cdfTeorica,
                    borderColor: 'rgba(139, 92, 246, 1)',
                    borderDash: [5, 5],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { type: 'linear', min: 0, max: 1 },
                    y: { min: 0, max: 1 }
                }
            }
        });
    }
    else {
        // Media / Varianza Scatter
        charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: datosRaw.map((_, i) => i+1),
                datasets: [{
                    label: 'Secuencia de Datos x_i',
                    data: datosRaw,
                    borderColor: 'rgba(139, 92, 246, 0.8)',
                    backgroundColor: 'rgba(139, 92, 246, 0.2)',
                    tension: 0.2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { min: 0, max: 1 }
                }
            }
        });
    }
}
