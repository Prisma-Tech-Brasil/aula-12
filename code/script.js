const tarefas = [];

function exibirLista() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  for (let indice = 0; indice < tarefas.length; indice++) {
    taskListElement.innerHTML += `
      <li>
        ${indice + 1}. ${tarefas[indice]}
        <button onclick="removerTarefa(${indice})">Deletar</button>
      </li>
    `;
  }
}

function adicionarTarefa(lista, novaTarefa) {
  if (novaTarefa) {
    lista.push(novaTarefa);
    exibirLista();
  }
}

document.getElementById("addTaskButton").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const tarefa = input.value;
  adicionarTarefa(tarefas, tarefa);
  input.value = "";
});

function removerTarefa(indice) {

}
