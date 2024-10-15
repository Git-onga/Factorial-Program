const todoList =[{
    name: 'Make dinner', 
    dueDate: '2022-12-22'},
    { 
        name:'wash dishes',
        dueDate: '2022-12-22'
    }];

renderToDoList();

function renderToDoList() {
    let todoListHTML = ``;

    for(let i=0; i< todoList.length; i++){
        const todoObject = todoList[i];
        //const name= todoObject.name;
        const {name,dueDate} = todoObject;
        const html = `
        <p>
            ${name} ${dueDate}
            <button onclick="
                todoList.splice(${i}, 1);
                renderToDoList();
            ">Delete</button>
        </p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    renderToDoList();
}
