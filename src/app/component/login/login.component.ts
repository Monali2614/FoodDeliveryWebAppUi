import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = '';
  errorMessage: string = '';
  passwordVisible: boolean = false; // New property for password visibility

  constructor(private userService: UserService, private router: Router) { }

  onLogin() {
    this.userService.login(this.username, this.password).subscribe(response => {
      console.log('User data saved', response);
      this.router.navigate(['/home']);
    }, error => {
      console.error('Error saving user data:', error);
      this.errorMessage = 'Invalid username or password';
    });
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    passwordField.type = this.passwordVisible ? 'text' : 'password';
  }
}
