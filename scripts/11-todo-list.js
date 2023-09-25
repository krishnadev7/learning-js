const todoList = [
  { name: "make dinner", date: "2023-09-25" },
  { name: " wash clothes", date: "2023-09-25" },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, date } = todoObject;

    const html = `
        <p>
        ${name} ${date}
        <button onclick="todoList.splice(${i},1); renderTodoList();">Delete</button>
        </p>`;
    todoListHtml += html;
  }

  document.querySelector(".todo-lists").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".date-input");
  const date = dateInputElement.value;

  todoList.push({ name, date });
  console.log(todoList);

  inputElement.value = " ";

  renderTodoList();
}
