let num = prompt("Digite o valor para gerar tabuada do mesmo: ")
let result
for(let i = 1; i <= 20; i++){
    result = (num * i)
    alert(num + " X " + i + " = " + result)
}