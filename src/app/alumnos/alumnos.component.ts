import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-alumnos',
	templateUrl: './alumnos.component.html',
	styleUrls: ['./alumnos.component.scss'],
})

export class AlumnosComponent implements OnInit {
	constructor() { }

	ngOnInit() {}

	alumnos = [
		{
			nombre: 'Christian',
			apellido: 'Ramirez',
			matricula: '0000001',
			imagen: 'assets/logo-fcfm.jpg'
		},
		{
			nombre: 'Aaylin',
			apellido: 'Demetci',
			matricula: '0000002',
			imagen: 'assets/logo-fcfm.jpg'
		},
		{
			nombre: 'Brian',
			apellido: 'Esquivel',
			matricula: '0000003',
			imagen: 'assets/logo-fcfm.jpg'
		},
		{
			nombre: 'Diego',
			apellido: 'Jasso',
			matricula: '0000004',
			imagen: 'assets/logo-fcfm.jpg'
		},
		{
			nombre: 'Jose',
			apellido: 'Vazquez',
			matricula: '1894608',
			imagen: 'assets/logo-fcfm.jpg'
		}
	];
}
