const tabuadaModule = (function () {
    const frm = document.getElementById('formTabuada');
    const resultadoDiv = document.getElementById('resultado04');
  
    function tabuada() {
      const numero = Number(frm.inNumero.value);
  
      let resposta = '';
      for (let i = 1; i <= 10; i++) {
        resposta += numero + ' X ' + i + ' = ' + numero * i + '\n';
      }
  
      resultadoDiv.innerText = resposta;
      resultadoDiv.style.color = '#CD6688';
      resultadoDiv.style.fontSize = "27px";
      resultadoDiv.style.padding = "15px";
    }
  
    frm.addEventListener('submit', function (event) {
      event.preventDefault();
      tabuada();
    });
  
    return {
      tabuada,
    };
  })();
  