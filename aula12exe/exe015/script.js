function verificar(){
    var data = new Date()

    // Fala que a var 'ano' representa o ano atual
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    // Se é igual a zero ou maior que o ano real
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    // Se estiver tudo correto
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        // Se for homem
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', 'img/menino.jpg')
            }else if (idade < 18){
                //Jovem
                img.setAttribute('src', 'img/garoto.jpg')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'img/adulto.jpg')
            } else if (idade < 117){
                //Idoso
                img.setAttribute('src', 'img/idoso.jpg')
            } else{
                //Morto
                img.setAttribute('src', 'img/morto.jpg')
            }
        // Se for mulher
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', 'img/menina.jpg')
            }else if (idade < 18){
                //Jovem
                img.setAttribute('src', 'img/garota.jpg')
            }else if (idade < 60){
                //Adulta
                img.setAttribute('src', 'img/adulta.jpg')
            } else if (idade < 123){
                //Idosa
                img.setAttribute('src', 'img/idosa.jpg')
            } else{
                // Morta
                img.setAttribute('src', 'img/morto.jpg')
            }
        }
        // Faz a resposta ir pro meio
        res.style.textAlign = 'center'

        // Faz trocar a frase dps de vericar
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        // Faz a img aparecer dps de verificar
        res.appendChild(img)

        // Arruma o tamanho da img
        img.style.height = '200px'
    }
}