let Quantity_initial_money = prompt("Digite quantidade inicial de saldo: ")
let option = ""
do {
    option = prompt("Escolha uma das opções: " +
    "\n1-Adicionar dinheiro" + 
    "\n2-Remover dinheiro" +
    "\n3-SAIR" +
    "\n\nSaldo Disponível: " + Quantity_initial_money
    )
    
} while (option !== "3")