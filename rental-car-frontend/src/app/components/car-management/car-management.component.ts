import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CarManagementComponent implements OnInit {
  cars: any[] = [];
  newCar: any = {
    brand: '',
    model: '',
    plateNumber: '',
    rentalPrice: 0,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.apiService.getCars().subscribe((data: any) => {
      this.cars = data;
    });
  }

  addCar() {
    this.apiService.addCar(this.newCar).subscribe(
      () => {
        this.loadCars();
        this.newCar = { brand: '', model: '', plateNumber: '', rentalPrice: 0 };
      },
      (error) => {
        alert('Failed to add car!');
      }
    );
  }
}
