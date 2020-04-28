/*
    Lógica de programação
    Pensando em todos os números naturais inferiores a 10 que são 
    múltiplos de 3 ou 5, temos 3, 5, 6 e 9. Somando esses múltiplos 
    obtemos o valor 23. Utilize um algorítimo para calcular a soma de 
    todos os múltiplos de 3 ou 5 abaixo de 1000
*/

sum = (items) => {
    return items.reduce((a, b) => a + b)
}

init = (value) => {
    let data = []

    for (let i = 1; i < value; i++) {
        if ((i % 3) == 0 || (i % 5) == 0)
        {
            data.push(i)
        }
    }

    console.log('Soma => ', sum(data))
}

init(1000)
