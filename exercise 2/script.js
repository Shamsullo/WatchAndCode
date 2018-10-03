
var todoList =[];

function addTodo(){
	var addTodoTextInput = document.getElementById('addTodoInput');	
	todoList.push({
		todoText: addTodoInput.value,
		completed: false
	});
	addTodoTextInput.value = '';
	displayTodos();
}

function changeTodo(){
	var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
	var changeTodoTextInput =  document.getElementById('changeTodoTextInput');
	todoList[changeTodoPositionInput.valueAsNumber].todoText = changeTodoTextInput.value;
	changeTodoPositionInput.value = '';
	changeTodoTextInput.value = '';
	displayTodos();
}

function deleteTodo(position){
	todoList.splice(position, 1);
	displayTodos();
}

function toggleCompleted(){
	var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
	var todo = todoList[toggleCompletedPositionInput.valueAsNumber];
	todo.completed = !todo.completed;
	toggleCompletedPositionInput.value = '';
	displayTodos();
}

function toggleAll(){
	var totalTodos = todoList.length; 
	var completedTodos = 0;

	todoList.forEach(function(todo){
   	if (todo.completed === true){
      	completedTodos++;
   	}
	}); 

	todoList.forEach(function(todo){
		if (completedTodos === totalTodos){
      	todo.completed = false;
      }else{
			todo.completed = true;
		}
	});
	displayTodos();
}  

function displayTodos(){
	var todosUl = document.querySelector('ul');
	todosUl.innerHTML = '';

	todoList.forEach(function(todo, position){
		var todoLi = document.createElement('li');
		var todoTextWithCompletion ='';

		if (todo.completed === true){
			todoTextWithCompletion = '(x)' + todo.todoText;
		}else{
			todoTextWithCompletion = '( )' + todo.todoText;
		}

		todoLi.id = position;
		todoLi.textContent = todoTextWithCompletion;
		todoLi.appendChild(createDeleteButton());
		todosUl.appendChild(todoLi);
	});
}

function createDeleteButton(){
	var deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';
	deleteButton.className = 'deleteButton';
	return deleteButton;
}

function setUpEventListeners(){
	var todosUl = document.querySelector('ul');
	todosUl.addEventListener('click', function(event){
		//get the element that was clicked on 
		var elementClicked = event.target;
		if(elementClicked.className === 'deleteButton'){
			deleteTodo(parseInt(elementClicked.parentNode.id));
		}
	});
}

setUpEventListeners();
