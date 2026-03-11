function calcularImc() {
    var p = parseFloat(document.getElementById("peso").value);
    var alt = parseFloat(document.getElementById("altura").value);

    var imc = p / (alt * alt);

    var classificacao = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 39.9) {
        classificacao = "Obesidade";
    } else if (imc >= 40.0) {
        classificacao = "Obesidade Grave";
}

    document.getElementById("resultado").innerText = "Resultado: " + imc;
    document.getElementById("classificacao").innerText = classificacao;
}
