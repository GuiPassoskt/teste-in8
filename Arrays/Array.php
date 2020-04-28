<?php 

/*
    Arrays
    Tendo os arrays ['ES', 'MG', 'RJ', 'SP', 'MT'] e 
    ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'], 
    percorra os vetores dados e crie um outro com a seguinte estrutura: 
    ['MT' => ''Mato Grosso'', 'ES'=>'Espírito Santo', 'MG'=>'Minas Gerais', 
    'RJ'=>'Rio de Janeiro', 'SP'=>'São Paulo']. Depois de criado terceiro vetor, leia-o e 
    imprima em cada linha a chave de cada posição e seu respectivo valor separados por "-".

*/

$key = ['ES', 'MG', 'RJ', 'SP', 'MT'];
$value = ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];

$relationship = array_combine($key, array_reverse($value));

print_r($relationship);

echo "<br>";

foreach ($relationship as $key => $value) 
{
    echo "<br> {$key} - {$value} <br>";
}