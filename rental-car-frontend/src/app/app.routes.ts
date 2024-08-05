import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarManagementComponent } from './components/car-management/car-management.component';
import { RentalManagementComponent } from './components/rental-management/rental-management.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'car-management', component: CarManagementComponent },
  { path: 'rental-management', component: RentalManagementComponent },
];
