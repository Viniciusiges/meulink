// Buscar por links salvos

export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// Salvar um link no localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    // se ja tiver um link salvo na lista não deixar duplicar
    const hasLink = linksStored.some (Link => Link.id === newLink.id)

    if(hasLink) {
        console.log('Esse link ja existe na sua lista')
        return;
    }
    // adicionando esse novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso');

}

export function deleteLink(links, id) {
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('Link deletado')

    return myLinks;
}
