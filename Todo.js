// let todoList = [];
// displayItem();

// function addTodo(){
//     let inputElement = document.querySelector
//     ('#todo-input');
//     let todoItem = inputElement.Value;
//     todoList.push(todoItem);
//     inputElement.value = '';

//     displayItem();
// }
// function displayItem(){
//     let containerElement = document.querySelector
//     ('.todo-container');
//     let newHtml = ''; 

//     for(let i = 0; i < todoList.length; i++) {
//      newHtml += `
//      <div>
//       <span>${todoList[i]}</span>
//     <button onclick"todoList.splice(${i}, 1);
//     displayItems();">Delete</button>
//     </div>
//     `;
//     }
//     containerElement.innerHTML = newHtml;  
// }


let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '4/10/2023'
  },
  {
    item: 'Go to College',
    dueDate: '4/10/2023'
  }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}