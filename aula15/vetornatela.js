var valores = [8, 1 ,7, 4, 2, 9]
valores.sort()
/* for (var c = 0; c < valores.length; c++){
    console.log(`A posição ${c} tem valor ${valores[c]}`)
} */

for(var pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}