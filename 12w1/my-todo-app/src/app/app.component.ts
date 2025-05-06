import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; // Import the TodoComponent

@Component({
  selector: 'app-root',
  standalone: true, // Keep this if it was generated as standalone
  imports: [TodoComponent], // Add TodoComponent to the imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-app';
}
