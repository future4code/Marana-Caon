
function meusInputs() {
    let tituloDoPost = document.getElementById("titulo-post")
    let autorDoPost = document.getElementById("autor-post")
    let conteudoDoPost = document.getElementById("texto-post")

    let publicacao = {
        titulo: tituloDoPost.value,
        autor: autorDoPost.value,
        conteudo: conteudoDoPost.value
    }

    let arrayDoPost = []

    arrayDoPost.push(publicacao)
    console.log(arrayDoPost)

    let postagem = document.getElementById("publicacao")
    postagem.innerHTML += ` ${publicacao.titulo} ${publicacao.autor} ${publicacao.conteudo}`

    tituloDoPost.value = ""
    autorDoPost.value = ""
    conteudoDoPost.value = ""

}

function rastreiaTecla() {
    if (e.key === "Enter") {
        meusInputs()
    }
}