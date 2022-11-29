import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DogComponent } from './dog/dog.component';
import { Doginterface} from './Dog-interface';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {

  private DogsUrl = '';

  constructor(private http:HttpClient) {}

  return this.http.get<Doginterface[]>(this.)

}
