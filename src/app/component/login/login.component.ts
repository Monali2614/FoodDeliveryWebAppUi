import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = ''; 
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  onLogin() {
    this.userService.login(this.username, this.password).subscribe(response => {
      console.log('User data saved:', response);
      this.router.navigate(['/userregister']);
    }, error => {
      console.error('Error saving user data:', error);
      this.errorMessage = 'Invalid username or password';
    });
  }

  togglePassword() {
    const passwordField = document.getElementById('password') as HTMLInputElement;
    const toggleIcon = document.getElementById('toggle-password')?.querySelector('img') as HTMLImageElement;
    
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.src = 'assets/eyeclose.jpeg'; // Change to "eye-slash" icon
      toggleIcon.alt = 'Hide password';
    } else {
      passwordField.type = 'password';
      toggleIcon.src = 'assets/eyeopen.jpeg'; // Change to "eye" icon
      toggleIcon.alt = 'Show password';
    }
  }

  navigateToAdmin() {
    this.router.navigate(['/admin']);
  }

  closeLogin() {
    // Add your logic to close the login popup
  }
}
