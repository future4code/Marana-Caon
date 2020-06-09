function adicionarTarefa() {
    const diasDaSemana = document.getElementById("dias-da-semana")
    console.log(diasDaSemana.value)

    const dias = document.getElementById(diasDaSemana.value)

    const meuInput = document.getElementById("tarefa")
    let item = meuInput.value
    console.log(item)
    
    const listaDeTarefas = document.getElementById(diasDaSemana.value)
    listaDeTarefas.innerHTML += `<li> ${item} </li>`
    meuInput.value = ""
    console.log(listaDeTarefas)
}