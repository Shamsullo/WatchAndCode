
var todoList = {
	todos: [],
	addTodo: function(todoText){
			todoList.todos.push({
			todoText: todoText,
			completed: false
		});
	},

	changeTodo: function(position, todoText){
		todoList.todos[position].todoText = todoText;
		// this.todos[position] = newValue;
	},
	deleteTodo: function(position){
		todoList.todos.splice(position, 1);
	},
	toggleCompleted: function(position){
		var todo = todoList.todos[position];
		todo.completed = !todo.completed;
	},
	toggleAll: function(){
		var totalTodos = todoList.todos.length;	
		var completedTodos = 0;

		todoList.todos.forEach(function(todo){
			if (todo.completed === true){
				completedTodos++;
			}
		});	

		todoList.todos.forEach(function(todo){
			//if everything is true make them false;
			if (completedTodos === totalTodos){
				todo.completed = false;
			}else{
				todo.completed = true;
			}
		});
	}
}; 	
var handlers = {
	addTodo: function(){
		var addTodoTextInput = document.getElementById('addTodoInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function(){
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput =  document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function(position){
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodos();
	}	
};

var view = {
	displayTodos: function(){
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';

		todoList.todos.forEach(function(todo, position){
			var todoLi = document.createElement('li');
			var todoTextWithCompletion ='';

			if (todo.completed === true){
				todoTextWithCompletion = '(x)' + todo.todoText;
			}else{
				todoTextWithCompletion = '( )' + todo.todoText;
			}
			
			todoLi.id = position;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(view.createDeleteButton());
			todosUl.appendChild(todoLi);
		});
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function(){
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event){
			//get the element that was clicked on 
			var elementClicked = event.target;
			if(elementClicked.className === 'deleteButton'){
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();





//Ability = Process(how you do things) * Time; 

//Comparasion with objects; 
//they will be compared by their address not by content;


// var myPrivitive = 10;
// var myObject = {name: 'shams'} //blue

// var myHouse1 = {color: 'blue'}; //memory address 1;
// var myHouse2 = myHouse1; // memory address 1.
//this is another address point the the same object myHourse1;
//that's is my after
// myHouse2.color = 'red';
//the color of both houses will be red;



