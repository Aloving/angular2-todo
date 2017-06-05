import { Component } from '@angular/core';

class Todo {
	title: string;
	completed: boolean;
}

const todos: Todo[]  = [
	{
		title: 'Изучить JavaScript',
		completed: true
	},
	{
		title: 'Изучить Angular2',
		completed: false
	},
	{
		title: 'Написать приложение',
		completed: false

	}
];

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl:'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent{
	title = 'Angular TODO';
	todos: Todo[] = todos;

	toggle(todo: Todo){
		todo.completed = !todo.completed;
	}

	delete(todo: Todo){
		let index = this.todos.indexOf(todo);

		if(index > -1){
			todos.splice(index, 1);
		}else{
			return;
		}

	}
}