import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  title_comp = 'Login';
  email: string = '';
  password: string = '';

  constructor(private apiSevice: ApiService, private router: Router) {}
  login() {
    this.apiSevice
      .login({ email: this.email, password: this.password })
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        },
        (error) => {}
      );
  }
}
