import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { showAlert } from '../../app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule], // Declare imports here
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    this.apiService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          showAlert(
            'Login successful! Redirecting to car management...',
            'success'
          );
          this.router.navigate(['/car-management']);
        },
        (error) => {
          showAlert(
            'Login failed! Please check your credentials and try again.'
          );
        }
      );
  }
}
