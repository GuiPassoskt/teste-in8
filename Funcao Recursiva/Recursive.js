/*
    Função recursiva
    Crie uma função recursiva para descobrir o menor número inteiro divisível 
    por 2, 3 e 10 ao mesmo tempo. Quando encontrá-lo, imprima-o na tela.

*/

divisible = (num) => {
    return num.filter(
        item => 
            (item % 2) === 0 && 
            (item % 3) === 0 && 
            (item % 10) === 0
    )
}

minValue = (min) =>
{
   
    const lower = Math.min.apply(Math, min)
    if (lower == Infinity) {
        console.log('Nenhum deles são divisivel por 2, 3 e 10 ao mesmo tempo') 
    } else {
        console.log('Menor numero inteiro divisivel por 2, 3 e 10 => ', lower)
    }
      
}

run = (...num) => 
{
    if ( !num || num == 0)
    {
        run(num)
    } else {
        minValue(divisible(num))
    } 
    
}


run(200, 30, 60)
