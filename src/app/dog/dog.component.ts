import { DogServiceService } from './../dog-service.service';
import { Component, OnInit } from '@angular/core';
import { Doginterface } from '../Dog-interface'; //importa a interface
import { observable } from 'rxjs';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog ?: Doginterface; //Trazendo a interface para o component. 1 elemento.

  getDog(): void {
    this.DogServiceService.ObserDog()
    .subscribe(inter => this.dog = inter)       //Referencia do serviço criado
  }

  constructor(private DogServiceService: DogServiceService ) { }

  ngOnInit(): void {
    this.getDog(); //chamando a função.
  }

}
