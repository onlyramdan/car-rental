import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  password_confirmation: string = '';
  address: string = '';
  phone_number: string = '';
  driver_license_number: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  register() {
    if (this.password !== this.password_confirmation) {
      alert('Passwords do not match!');
      return;
    }

    this.apiService
      .register({
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        address: this.address,
        phone_number: this.phone_number,
        driver_license_number: this.driver_license_number,
      })
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/car-management']);
        },
        (error) => {
          alert('Registration failed!');
        }
      );
  }
}
