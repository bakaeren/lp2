import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  // Redirect the root path to the login page
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Route for the registration page
  { path: 'register', component: RegisterComponent },
  // Route for the login page
  { path: 'login', component: LoginComponent },
  // Route for the profile page (requires login in a real app)
  { path: 'profile', component: ProfileComponent },
  // Wildcard route for any other path - redirect to login
  { path: '**', redirectTo: '/login' }
];
