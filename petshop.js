let listaDePets = [];


let adicionarPet = (nomePet) => {
    listaDePets.push(nomePet)

    console.log(listaDePets)

    return true
}

module.exports = {adicionarPet}