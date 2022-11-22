const word = prompt("Digite uma palavra: ")

let invertWord = ""

for (let i = word.length - 1;i >= 0; i--){
    invertWord += word[i]
}

if(word == invertWord) {
    alert(word + " é um Palíndromo!")
} else {
    alert(word + " Não é um Palíndromo!")
}