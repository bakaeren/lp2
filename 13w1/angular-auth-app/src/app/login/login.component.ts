import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For directives like *ngIf
import { FormsModule } from '@angular/forms'; // For [(ngModel)]
import { Router, RouterLink } from '@angular/router'; // Import Router and RouterLink

// Define a User interface (can be shared or redefined)
interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Import necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };
  loginError: boolean = false; // Flag to show error message

  constructor(private router: Router) { }

  // Function to handle user login
  login(): void {
    // Reset error flag
    this.loginError = false;

    // Basic validation
    if (!this.user.username || !this.user.password) {
        console.warn('Please enter username and password.');
        // You could add a more user-friendly message here
        return;
    }

    // Get users from localStorage
    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    // Find the user with matching username and password (case-insensitive username check)
    const foundUser = users.find(u =>
      u.username.toLowerCase().trim() === this.user.username.toLowerCase().trim() &&
      u.password.trim() === this.user.password.trim()
    );

    if (foundUser) {
      console.log('Login successful for user:', foundUser.username);
      // Store the logged-in user's username in localStorage
      localStorage.setItem('currentUser', foundUser.username);
      // Redirect to the profile page
      this.router.navigate(['/profile']);
    } else {
      console.log('Login failed: Invalid credentials.');
      this.loginError = true;
    }
  }
}
