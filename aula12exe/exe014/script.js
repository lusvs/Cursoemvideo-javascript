function carregar(){
    // Fala que a var 'msg' vai respresentar a div 'msg'
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()

     // Fala que a var 'hora' é a horas real
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/manha.jpg'
        document.body.style.background = 'green'
    } else if (hora <= 17) {
        //Boa tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'orange'
    } else{
        //Boa Noite
        img.src = 'img/noite.jpg'
        document.body.style.background = 'blue'
    }
}