import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Doginterface } from './Dog-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogServiceService {
  private DogsUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  ObserDog(): Observable<Doginterface> {
    return this.http.get<Doginterface>(this.DogsUrl);
  }
}
