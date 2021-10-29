function contar() {
    var i = document.querySelector('input#inicio')
    var f = document.querySelector('input#fim')
    var p = document.querySelector('input#passo')
    let res = document.getElementById('res')
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossível contar!`
    } else {
        res.innerHTML = 'Contando: <br>'
        var ini = Number(i.value)
        var fim = Number(f.value)
        var pas = Number(p.value)
        if (pas <= 0) {
            window.alert('Passo inválido! considerando PASSO 1')
            pas = 1
        }
        if (ini < fim) {
            for(let c = ini; c <= fim; c += pas) {
                res.innerHTML += ` ${c} \u{1F449}`
        }
            res.innerHTML += `\u{1F3C1}`
     } else{
         for(let c = ini; c >= fim; c -= pas){
             res.innerHTML += `${c} \u{1F449}`
         }
     }
     res.innerHTML += `\u{1F3C1}`
    }
}