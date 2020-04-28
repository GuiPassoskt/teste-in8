/*
    Arrays
    Tendo os arrays ['ES', 'MG', 'RJ', 'SP', 'MT'] e 
    ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'], 
    percorra os vetores dados e crie um outro com a seguinte estrutura: 
    ['MT' => ''Mato Grosso'', 'ES'=>'Espírito Santo', 'MG'=>'Minas Gerais', 
    'RJ'=>'Rio de Janeiro', 'SP'=>'São Paulo']. Depois de criado terceiro vetor, leia-o e 
    imprima em cada linha a chave de cada posição e seu respectivo valor separados por "-".

*/

const key =  ['ES', 'MG', 'RJ', 'SP', 'MT']
const value = ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo']

const reverseValue = value.reverse()

let relationship = []

for (let i = 0; i < key.length; i++) {
    relationship.push(key[i].concat(' - ', reverseValue[i]))
}


console.log(relationship)