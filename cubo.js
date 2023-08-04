function calcularPotencias() {
    const n = parseInt(document.getElementById("n").value, 10);
    let resultados = [];

    for (let i = 1; i <= n; i++) {
      const q = i ** 2;
      const c = i ** 3;
      resultados.push(`${i} ${q} ${c}`);
    }

    const resultadoDiv = document.getElementById("resultado03");
    resultadoDiv.innerHTML = `<p>${resultados.join("<br>")}</p>`;
    resultadoDiv.style.color = "#89375F"; 
    resultadoDiv.style.fontSize = "20px";
    resultadoDiv.style.padding = "15px";
  }