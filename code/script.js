const tarefas = [];

function exibirLista() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  for (let indice = 0; indice < tarefas.length; indice++) {
    taskListElement.innerHTML += `
      <li>
        ${indice + 1}. ${tarefas[indice]}
        <button onclick="removerTarefa(${indice})">Remover</button>
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

function removerTarefa(indice) {
  tarefas.splice(indice, 1);
  exibirLista();
}

document.getElementById("addTaskButton").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const novaTarefa = taskInput.value;
  adicionarTarefa(tarefas, novaTarefa);
  taskInput.value = "";
});
