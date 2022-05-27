import { Component } from '@angular/core';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
	alumnos = [
		{
			nombre: 'Christian',
			apellido: 'Ramirez',
			matricula: '0000001'
		},
		{
			nombre: 'Aaylin',
			apellido: 'Demetci',
			matricula: '0000002'
		},
		{
			nombre: 'Brian',
			apellido: 'Esquivel',
			matricula: '0000003'
		},
		{
			nombre: 'Diego',
			apellido: 'Jasso',
			matricula: '0000004'
		},
		{
			nombre: 'Jose',
			apellido: 'Vazquez',
			matricula: '1894608'
		}
	];

	constructor() {}
}
