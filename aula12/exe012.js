var agora = new Date() // Pega a hora de verdade
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom Dia!')
}

else if (hora >= 18){
    console.log('Boa noite')
}

else{
    console.log('Boa tarde')
}