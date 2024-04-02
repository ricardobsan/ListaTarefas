
const active =document.getElementById("infoBtn");
const fechar = document.getElementById("fechar1");
const container2 = document.getElementById("container2");
const sobreposicao = document.getElementById('sobreposicao');
const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task');
const infBtn2 =document.getElementById("infor");


let minhaListaDeItens = [] // array para adicionar cada item da funcão adicionarNovaTarefa

// função para  quando o usuario apertar o ENTER tambem funcione.
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { // 13 é o código da tecla Enter
        adicionarNovaTarefa()
    }
});


function adicionarNovaTarefa() {
    if (input.value === '') { //verifica se o valor do input é null 
        alert("Campo vazio! \nPor favor preencha os campos.") // se estiver vazio apresenta o alerta
        return; // caso tenha informação , retorna para a função
    }
    minhaListaDeItens.push({// push serve adicionar cada tarefa digitada pelo usuario
        tarefa: input.value,
        concluida: false
    })
    input.value = '' // após adicionar a nova tarefa o input é zerado.

    mostrarTarefas() // atualiza a pagina com a cada tafera digitada
}

function mostrarTarefas() { // função que  cria  a a nova li (tarefa)
    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => { // parametros do forEach 1º cada item do array , 2º index "posicão"
        novaLi = novaLi + //Sempre acrescenta uma nova tarefa (concatena).

            // formatação de cada li "imagem + texto + imagem"
            // a class tem um  IF se conluida for true é (class= "done") se não (class="task")
            `        
        <li class="task ${item.concluida && "done"}"> 
        <img src="images/check-.png"  class="img" alt="check tarefa" onclick= concluirTarefa(${index})>
        <p>${item.tarefa}</p>
        <img src="images/delete.png" class="img" alt="Delete tarefa" onclick="deletarItem(${index})" >
        </li>
    `
    })

    listaCompleta.innerHTML = novaLi // exibir na pagina a nova tarefa

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens)) //localStorage  criando a lista como string
}


function recarregarTarefas() { //função chamando a pagina
    const tarefasDoLocaStorage = localStorage.getItem('lista') //variavel para pegar os itens do localstorage

    if (tarefasDoLocaStorage) {// IF para só mostrar os itens se caso tiver itens
        minhaListaDeItens = JSON.parse(tarefasDoLocaStorage)//JSON.parse converte a string para objeto novamente
    }

    mostrarTarefas() // exibe a lista atualizada
}


function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida // pega a posicao do item e inverte o valor do "concluida" (DE true, para False) 

    mostrarTarefas() //atualiza a lista após o delete do item selecionado
}


function deletarItem(index) {
    minhaListaDeItens.splice(index, 1) //splice deleta o item do array ""

    mostrarTarefas() //atualiza a lista após o delete do item selecionado
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa) // click no botão para executar todo codigo acima  


// Botão informações
active.addEventListener("click",() => {

    container2.classList.add("active");
    sobreposicao.style.display= "block"
    
})

fechar.addEventListener("click",() => {

    container2.classList.remove("active");
    sobreposicao.style.display= "none"
})

// acionamento do botão mobile
infBtn2.addEventListener("click",() => {

    container2.classList.add("active");
    sobreposicao.style.display= "block"
    
})

