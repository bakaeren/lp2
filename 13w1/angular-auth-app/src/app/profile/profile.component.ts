import { Component, OnInit } from '@angular/core'; // Import OnInit
import { CommonModule } from '@angular/common'; // For directives like *ngIf
import { Router } from '@angular/router'; // To navigate for logout

// Define a User interface (can be shared or redefined)
interface User {
  name: string;
  username: string;
  email: string;
  password: string; // Password is not displayed, but part of the stored object
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule], // Import necessary modules
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { // Implement OnInit
  loggedInUser: User | null = null; // Variable to hold the logged-in user object

  constructor(private router: Router) { }

  // OnInit lifecycle hook to load user data when the component initializes
  ngOnInit(): void {
    this.loadUserProfile();
  }

  // Function to load the logged-in user's profile data
  loadUserProfile(): void {
    // Get the username of the currently logged-in user from localStorage
    const currentUsername = localStorage.getItem('currentUser');

    if (currentUsername) {
      // Get all users from localStorage
      const usersString = localStorage.getItem('users');
      const users: User[] = usersString ? JSON.parse(usersString) : [];

      // Find the user object based on the current username (case-insensitive check)
      this.loggedInUser = users.find(u => u.username.toLowerCase() === currentUsername.toLowerCase()) || null;

      // If user data is not found (shouldn't happen if currentUser is set correctly),
      // redirect to login
      if (!this.loggedInUser) {
        console.warn('Logged-in user data not found. Redirecting to login.');
        this.logout(); // Effectively logs out and redirects
      }
    } else {
      // If no currentUser is found in localStorage, redirect to login
      console.warn('No current user found in localStorage. Redirecting to login.');
      this.router.navigate(['/login']);
    }
  }

  // Function to handle user logout
  logout(): void {
    console.log('Logging out user...');
    // Remove the currentUser from localStorage
    localStorage.removeItem('currentUser');
    // In a real app, you would also clear authentication tokens/session here
    // Redirect to the login page after logout
    this.router.navigate(['/login']);
  }
}
