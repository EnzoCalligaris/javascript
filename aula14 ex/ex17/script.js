function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.lenght == 0){
        window.alert('[ERRO] Digite um número válido!')
    } else{
        tab.innerHTML = ''
        var n = Number(num.value)
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text= `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}