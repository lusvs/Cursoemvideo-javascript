var c = 1
var a = 1

// Faz o teste lógico antes, se for true ele executa.
while (c <= 6){
    console.log(`Passo ${c}`)
    c++
}
console.log('=======================================')
// Executa o comando antes, se depois for true ele testa novamente.
do {
    console.log(`Passo ${a}`)
    a++
} while (a <= 10)

