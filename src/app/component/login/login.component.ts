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

  constructor(private userService: UserService , private router: Router) { }

  onLogin() {
    this.userService.login(this.username, this.password).subscribe(response => {
      console.log('User data saved', response);
      console.log(response.email);
      this.router.navigate(['/home']);
    }, error => {
      console.error('Error saving user data:', error);
      this.errorMessage = 'Invalid username or password';
    });
}

}
