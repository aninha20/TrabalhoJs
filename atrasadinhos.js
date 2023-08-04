function Aulas() {
    var q1 = 0;
    var qa = parseInt(document.getElementById("inQuant").value);
    var qm = parseInt(document.getElementById("inQuantmin").value);

    for (var i = qa; i > 0; i--) {
        var horaC = parseInt(prompt("Insira a quantidade de horas:"));
        if (horaC <= 0) {
            q1++;
        }
    }

    if (q1 >= qm) {
        document.getElementById("resultado05").innerHTML = "YES, haverá aula hoje!";
    } else {
        document.getElementById("resultado05").innerHTML = "NO, não haverá aula hoje.";
    }
}
