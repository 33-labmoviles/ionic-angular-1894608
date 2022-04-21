import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  alumnos = [
    {
      nombre: 'Christian',
      apellido: 'Ramirez',
      matricula: '1234567'
    },
    {
      nombre: 'Aaylin',
      apellido: 'Demetci',
      matricula: '1234567'
    },
    {
      nombre: 'Brian',
      apellido: 'Esquivel',
      matricula: '1234567'
    },
    {
      nombre: 'Diego',
      apellido: 'Jasso',
      matricula: '1234567'
    },
    {
      nombre: 'Jose',
      apellido: 'Vazquez',
      matricula: '1894608'
    }
  ];
}
