import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and *ngIf
import { FormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]

interface Task {
  description: string;
  editing: boolean; // Add a flag for editing state
}

@Component({
  selector: 'app-todo',
  standalone: true, // Assuming this component is standalone
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule here
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // Array to hold the tasks
  tasks: Task[] = [];
  // Variable to hold the new task description from the input field
  newTaskDescription: string = '';
  // Variable to hold the edited task description
  editedTaskDescription: string = '';

  constructor() { }

  // Function to add a new task
  addTask(): void {
    // Check if the new task description is not empty or just whitespace
    if (this.newTaskDescription.trim()) {
      // Add the new task to the tasks array
      this.tasks.push({ description: this.newTaskDescription.trim(), editing: false });
      // Clear the input field after adding the task
      this.newTaskDescription = '';
    }
  }

  // Function to delete a task
  deleteTask(index: number): void {
    // Remove the task at the specified index from the array
    this.tasks.splice(index, 1);
  }

  // Function to start editing a task
  editTask(task: Task): void {
    // Set the editing flag to true for the selected task
    task.editing = true;
    // Copy the current task description to the editedTaskDescription variable
    this.editedTaskDescription = task.description;
  }

  // Function to save the edited task
  saveTask(task: Task): void {
    // Check if the edited task description is not empty or just whitespace
    if (this.editedTaskDescription.trim()) {
      // Update the task description with the edited value
      task.description = this.editedTaskDescription.trim();
    }
    // Set the editing flag back to false
    task.editing = false;
    // Clear the editedTaskDescription variable
    this.editedTaskDescription = '';
  }

  // Function to cancel editing
  cancelEdit(task: Task): void {
    // Set the editing flag back to false without saving changes
    task.editing = false;
    // Clear the editedTaskDescription variable
    this.editedTaskDescription = '';
  }
}
