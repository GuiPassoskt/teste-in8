<?php

/*
    Lógica de programação
    Pensando em todos os números naturais inferiores a 10 que são 
    múltiplos de 3 ou 5, temos 3, 5, 6 e 9. Somando esses múltiplos 
    obtemos o valor 23. Utilize um algorítimo para calcular a soma de 
    todos os múltiplos de 3 ou 5 abaixo de 1000
*/

function sum ($items, $item) {
    return $items += $item;
}

function init ($value) {

    $data = [];

    for ($i = 1; $i < $value; $i++) {
        if (($i % 3) == 0 || ($i % 5) == 0)
        {
            array_push($data, $i);
        }
    }

    echo "Soma => " . array_reduce($data, "sum");
}

init(1000);
