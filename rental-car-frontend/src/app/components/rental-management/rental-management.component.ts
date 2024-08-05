import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rental-management',
  templateUrl: './rental-management.component.html',
  styleUrls: ['./rental-management.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RentalManagementComponent implements OnInit {
  cars: any[] = [];
  rentals: any[] = [];
  selectedCar: number = 0;
  rental: any = {
    startDate: '',
    endDate: '',
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadCars();
    this.loadRentals();
  }

  loadCars() {
    this.apiService.getCars().subscribe((data: any) => {
      this.cars = data;
    });
  }

  loadRentals() {
    this.apiService.getRentals().subscribe((data: any) => {
      this.rentals = data;
    });
  }

  addRental() {
    if (this.selectedCar === 0) {
      alert('Please select a car!');
      return;
    }

    this.apiService
      .addRental({ carId: this.selectedCar, ...this.rental })
      .subscribe(
        () => {
          this.loadRentals();
          this.rental = { startDate: '', endDate: '' };
          this.selectedCar = 0;
        },
        (error) => {
          alert('Failed to add rental!');
        }
      );
  }

  returnCar(carId: number) {
    this.apiService.returnCar(carId).subscribe(() => {
      this.loadRentals();
    });
  }
}
