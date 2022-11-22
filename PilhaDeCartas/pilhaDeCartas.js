const pilhaDeCartas = []

let opcao = ""

do {

    opcao = prompt("Cartas no baralho" + pilhaDeCartas.length +
    "\n1. Adicionar uma carta\n2. puxar uma carta\n3. Sair")

    switch(opcao) {
        case '1':

            const novaCarta = prompt("Qual é a carta?")

            pilhaDeCartas.push(novaCarta)

            break

        case '2':
            
            const cartaPuxada = pilhaDeCartas.pop()

            if(!cartaPuxada) {

                alert("Não há nenhuma carta na pilha de cartas")
    
            } else {

                alert("Você puxou um(a) " + cartaPuxada)

            }

            break

        case '3':

            alert("Saindo...")

            break
        default:

            alert("Opção Inválida!")

    }
} while (opcao != 3)