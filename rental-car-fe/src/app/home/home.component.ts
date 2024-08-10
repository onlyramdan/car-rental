import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Welcome to Rental Car';
}
