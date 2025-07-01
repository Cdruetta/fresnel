const resultado = document.getElementById("resultado");

function calcularFresnel() {
    const dInput = document.getElementById("distancia");
    const fInput = document.getElementById("frecuencia");
    const d = parseFloat(dInput.value);
    const f = parseFloat(fInput.value);

    resultado.classList.remove("visible");
    resultado.textContent = "";

    if (isNaN(d) || isNaN(f) || d <= 0 || f <= 0) {
        resultado.textContent = "❌ Por favor, ingrese valores válidos y mayores a cero.";
        resultado.style.color = "red";
        resultado.classList.add("visible");
        return;
    }

    const fresnel = 8.656 * Math.sqrt(d / f);

    function truncarDecimal(numero, decimales) {
        const factor = Math.pow(10, decimales);
        return Math.floor(numero * factor) / factor;
    }

    resultado.textContent = `🛰️ Zona de Fresnel: ${truncarDecimal(fresnel, 2)} metros`;
    resultado.style.color = "#004080";

    setTimeout(() => {
        resultado.classList.add("visible");
    }, 10);
    }

    function limpiar() {
    document.getElementById("distancia").value = "";
    document.getElementById("frecuencia").value = "";
    resultado.textContent = "";
    resultado.classList.remove("visible");
    }
