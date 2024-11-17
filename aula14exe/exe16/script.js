function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Ipossivel contar'
        window.alert('[ERRO] Preencha os dados faltantes')
    } 
    else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }           
        }else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
}