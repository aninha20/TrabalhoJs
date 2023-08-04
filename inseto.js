function verificarInseto() {
    const numerosEntrada = document.getElementById("numeros").value;
    const numerosArray = numerosEntrada.split(",").map(num => parseInt(num.trim(), 10));

    let resultados = [];
    for (let i = 0; i < numerosArray.length; i++) {
      let num = numerosArray[i];
      if (num <= 8000) {
        resultados.push("Inseto!");
      } else if (num > 8000) {
        resultados.push("Mais de 8000!");
      }
    }

    const resultadoDiv = document.getElementById("resultado02");
    resultadoDiv.innerHTML = `<p>${resultados.join("<br>")}</p>`;
    resultadoDiv.style.color = "#89375F";
    resultadoDiv.style.fontSize = "27px";
    resultadoDiv.style.padding = "15px";
  }