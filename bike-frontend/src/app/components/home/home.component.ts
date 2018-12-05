import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Avaneger Street 220',
    'Avaneger Street 150',
    'Avaneger Cruise 220',
    'Avaneger Cruise 150'
  ];

  bikeform: FormGroup;
  validMessage = '';

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeform = new FormGroup ({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {
    if (this.bikeform.valid) {
      this.validMessage = 'your bike registration has been submitted. Thank You';
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
          data => {
            this.bikeform.reset();
          },
        error => {
          console.error(error);
        }
      );
    } else {
      this.validMessage = 'Please fill valid details before submitting';
    }
  }

}
