function processarValidacao() {
    const valorInput = document.getElementById('cpf').value;
    const ehValido = validarCPF(valorInput);

    if (ehvalido) {
        alert("O CPF " + valorInput + " é válido!!");
    } else {
        alert("O CPF " + valorInput + " é inválido!!")
    }
}


function soma(){
    const valorInput = document.getElementById('cpf').value;

    const valorNome = document.getElementById('nome').value;

    const valorEmail = document.getElementById('email').value;

    const valorEndereco = document.getElementById('endereco').value;

    alert("Olá "+ valorNome + ", Seu CPF: " + valorInput + " Seu Email: " + valorEmail + " Seu endereco: " + valorEndereco);
}




function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.lenght !== 11 || !!cpf.match(/(\d)\1{10}/)){
        return false;
    }

    const digitos = cpf.split(''.localeCompare(el => +el));
}