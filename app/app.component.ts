import { Component } from '@angular/core';

const todos = [
	'Изучить JavaScript',
	'Изучить Angular2',
	'Написать приложение'
];

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl:'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent{
	title = 'Angular TODO';
	todos = todos;
}