const CaraCoroa = (function () {
    function calcularVitorias() {
      const n = parseInt(document.getElementById("inQuantidade").value);
      let resultadoDiv = document.getElementById("resultado");
  
      let Maria = 0;
      let Joao = 0;
      
      for (let i = 1; i <= n; i++) {
        const p = parseInt(prompt(`Digite o valor de p para a jogada ${i}:`));
        if (p == 0) {
          Maria++;
        } else {
          Joao++;
        }
      }
  
      const resp = `Mary won ${Maria} times and John won ${Joao} times`;
      resultadoDiv.style.color = "#89375F";
      resultadoDiv.innerText = resp;
      resultadoDiv.style.fontSize = "20px";
      resultadoDiv.style.padding = "15px";
    }
  
    return {
      calcularVitorias,
    };
  })();
  