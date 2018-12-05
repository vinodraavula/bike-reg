import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable()
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes() {
    const token = localStorage.getItem('access_token');
        console.log('token: -------------------------------------> ' + token);
    return this.http.get('/server/api/v1/bikes',
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getBike(id: number) {
    const token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/bikes/get/' + id,
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }

  deleteBike(id: number) {
    const token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/bikes/delete/' + id,
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }

  createBikeRegistration(bike) {
    console.log(bike);
    const body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }



}
