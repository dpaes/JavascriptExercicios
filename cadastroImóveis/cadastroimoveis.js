const imoveis_salvos = []

let opcao = ""

do {

    let opcao = prompt("\nImóveis cadastrados: "+ imoveis_salvos.length +"\nEscolha uma das opções:\n1. Salvar Imóvel\n2. Imóveis Saldos\n3. Sair")

    switch(opcao){
        case '1':

        const imoveis_salvos = {}

        imoveis_salvos.proprietario = prompt("Informe o nome do proprietário: ")

        imoveis_salvos.quartos = parseFloat(prompt("Quantos banheiros tem no imóvel: "))

        imoveis_salvos.banheiros = parseFloat(prompt("Quantos banheiros tem no imóvel: "))

        imoveis_salvos.garagem = prompt("O imóvel possui garagem? ")

        const confirmacao = confirm(

            "Salva imóvel?\n" + "\nProprietário: " + imoveis_salvos.proprietario + "\nQuartos: " + imoveis_salvos.quartos + "\nBanheiros: " + imoveis_salvos.banheiros + "\nPossui Garagem? " + imoveis_salvos.garagem

        )
        
        if(confirmacao) {

            imoveis_salvos.push(imoveis_salvos)

            alert("Imóvel salvo com sucesso!")

        } else {
            alert("Voltando ao menu.")
        }

        break

        case '2':

            for(let i = 0; i < imoveis_salvos.length; i++) {
                alert(

                    "Imóvel " + (i + 1) +

                    "\nProprietário: " + imoveis_salvos[i].proprietario +

                    "\nQuartos: " + imoveis_salvos[i].quartos +

                    "\nBanheiros:" + imoveis_salvos[i].banheiros +

                    "\nPossui Garagem? " + imoveis_salvos[i].garagem

                )
            }

            break

            case '3':

                alert("Saindo...")

                break

            default:

                alert("Opção Inválida!")

                break

    }

} while(opcao != 3)