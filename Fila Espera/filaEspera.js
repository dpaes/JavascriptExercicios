let lista_espera = []

let opcao = ""

do {

    let paciente = ""

    for(let i = 0; i < lista_espera.length; i++){

        paciente += (i +1) + "º - " + lista_espera[i] + "\n"

    }
    
    opcao = prompt("Pacientes:\n" + paciente + "\nEscolha uma opção:\n1. Novo Paciente\n2. Consultar paciente\n 3. Sair")
        
    switch(opcao){

        case '1':
            
            const novo_paciente = prompt("Qual o nome do novo paciênte? ")
            
            lista_espera.push(novo_paciente)

            break
        
        case '2':

            const consultar_paciente = lista_espera.shift()

            if(consultar_paciente){

            alert(consultar_paciente + " foi removido da fila.")

            } else{

                alert("Não há pacientes na fila!")

            }

            break

        case '3':

            alert("Encerrando...")

            break
        
        default:
            alert("Opção Inválida!")
    }

} while(opcao != '3')