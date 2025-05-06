import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For directives like *ngIf
import { FormsModule } from '@angular/forms'; // For [(ngModel)]
import { Router, RouterLink } from '@angular/router'; // To navigate after registration

// Define a User interface for better type safety
interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Import necessary modules
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // User object to hold form data
  user: User = {
    name: '',
    username: '',
    email: '',
    password: ''
  };
  registrationSuccess: boolean = false; // Flag to show success message
  usernameExistsError: boolean = false; // Flag to show username exists error

  constructor(private router: Router) { }

  // Function to handle user registration
  register(): void {
    // Reset error flags
    this.registrationSuccess = false;
    this.usernameExistsError = false;

    // Basic validation: check if required fields are not empty
    if (!this.user.name || !this.user.username || !this.user.email || !this.user.password) {
      console.warn('Please fill in all fields.');
      // You could add a more user-friendly message here
      return;
    }

    // Get existing users from localStorage
    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    // Check if the username already exists (case-insensitive check)
    if (users.some(u => u.username.toLowerCase() === this.user.username.toLowerCase())) {
      console.warn('Username already exists.');
      this.usernameExistsError = true;
      return;
    }

    // Add the new user to the array
    // Store the user data including name, username, email, and password
    users.push(this.user);

    // Store the updated users array back in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    console.log('User registered successfully:', this.user);
    this.registrationSuccess = true;

    // Optionally, redirect to login after a short delay
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000); // Redirect after 2 seconds
  }
}
