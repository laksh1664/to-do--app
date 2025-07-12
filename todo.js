let todoList=[];
displayItems();


function toDoadd(){
  let inputElement= document.querySelector('#todo-input');
  let dateElement= document.querySelector('#todo-date');
  let todoItem= inputElement.value;
  let todoDate= dateElement.value;
  console.log(todoItem);
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}
function displayItems(){
   let containerElement= document.querySelector('.todo-container');
   let newHtml='';
   
   for(let i=0; i<todoList.length; i++){
    let item= todoList[i].item;
    let dueDate= todoList[i].dueDate;
    newHtml += `
   
     <input type="checkbox" onchange="markCompleted(this)">
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="
      todoList.splice(${i},1);
      displayItems();
    ">Delete</button>
    
    `;
   }
   containerElement.innerHTML=newHtml;
}
function markCompleted(checkbox) {
  const taskText = checkbox.parentElement.querySelector('.task-text');
  taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
