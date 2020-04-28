<?php 

/*
    Função recursiva
    Crie uma função recursiva para descobrir o menor número inteiro divisível 
    por 2, 3 e 10 ao mesmo tempo. Quando encontrá-lo, imprima-o na tela.

*/

function condition ($item) {
    if (
        ($item % 2) === 0 && 
        ($item % 3) === 0 && 
        ($item % 10) === 0)
    {
       
        return $item;
    }
    
}

function divisible ($num) {
    return array_filter($num, 'condition');
}

function minValue ($min)
{
    if (count($min) == 0)
    {
        echo "Nenhum deles são divisivel por 2, 3 e 10 ao mesmo tempo";
    } else {
        echo "<br>Menor numero inteiro divisivel por 2, 3 e 10 => " . min($min);
    }
}

function run ($num = array())
{
    if (!$num || count($num) == 0)
    {
        run($num);
    } else {
        minValue(divisible($num));
    }
     
}


run([2, 27]);
