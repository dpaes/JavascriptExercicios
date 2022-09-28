let num = prompt("Digite o valor para gerar tabuada do mesmo: ")

let result = ""

for(let i = 1; i <= 20; i++){

    result += num + " X " + i + " = " + (num * i) + "\n"

}

alert("Resultado da tabuada de " + num + " é: \n" + result)
