<?php
    echo "<h1>Aula02_SW-1_20/02</h1>";
    $nome = 'Bella';
    $idade = 16;
    $altura = 1.58;
    $status = false;

    // exibir valores na tela

    echo "O nome é $nome"; // 1° forma
    echo "<br>";
    echo "O nome é: " . $nome; // 2° forma 
    echo "<br>";
    echo 'O nome é: ' . $nome; // 3° forma 
    echo "<br>";

    # ponto como concatenação
    # aspas duplas força todo o conteúdo dela para string

    echo "<hr>";
    // VERIFICAR TIPO E VALOR DE UMA VARIÁVEL
    var_dump($altura); // depuração do código
    echo "<br>";
    print_r($altura);
    echo "<br>";

    # var_dump mostra o tipo e o valor da variável, enquanto o print_r mostra somente o valor
    echo "<hr>";
    // LAÇO DE REPETIÇÃO
    for ($i=1; $i < 6; $i++) { 
        echo $i; echo "<br>";}
    echo "<hr>";

    // CURIOSIDADE DO PHP A RESPEITO DOS VALORES BOOLEANOS
    echo "O status é: $status";

    # status true - exibe 1
    # status false - exibe vazio
?>