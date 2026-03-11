function somar() {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);

    var soma = num1 + num2;

    document.getElementById("resultado").innerText = "Resultado: " + soma;
}