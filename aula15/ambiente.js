var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)

var pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`o valor 8 está na posição ${pos}`)
}
