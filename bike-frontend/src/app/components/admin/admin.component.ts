import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes;
  constructor(private bikeService: BikeService, private authService: AuthService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => {this.bikes = data; },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

  logout() {
    this.authService.logout();
  }

}
