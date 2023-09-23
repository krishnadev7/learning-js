const todoList = ['make dinner', ' wash clothes'];

renderTodoList();

function renderTodoList(){
    let todoListHtml = '';

    for(let i = 0; i < todoList.length; i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        todoListHtml += html;
    }

    document.querySelector('.todo-lists').innerHTML = todoListHtml;
}

function addTodo(){
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = " ";

    renderTodoList();
   
}