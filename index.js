let Quantity_initial_money = prompt("Digite quantidade inicial de saldo: ")
Quantity_initial_money = parseFloat(Quantity_initial_money)
let option = ""
do {
    option = prompt("Escolha uma das opções: " +
    "\n1-Adicionar dinheiro" + 
    "\n2-Remover dinheiro" +
    "\n3-SAIR" +
    "\n\nSaldo Disponível: " + Quantity_initial_money
    )
    
    switch (option){
        case "1":
            Quantity_initial_money += parseFloat( prompt("Digite valor a ser adicionado: "))
            break
        case "2":
            Quantity_initial_money -= parseFloat( prompt("Digite valor a ser removido: "))
            break
        case "3":
            alert("Saindo...")
            break

        default:
            alert("Opção Inválida.")
    }

} while (option !== "3")