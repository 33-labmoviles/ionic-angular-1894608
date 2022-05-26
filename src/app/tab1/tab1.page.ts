import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnChanges {

	constructor() {}

	//changes: SimpleChanges
	ngOnChanges(): void {
	}

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
	
	@Input() nombre: string = "";
	@Input() apellido: string = "";
	@Input() matricula: string = "";

	agregarAlumno(): void {
		var nuevoAlumno: any = {
			"nombre": this.nombre,
			"apellido": this.apellido,
			"matricula": this.matricula
		}
		this.alumnos.push(nuevoAlumno);
		this.alumnos.sort(function(a, b) {
			var nameA = a.nombre.toUpperCase(); 
			var nameB = b.nombre.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		console.log(this.alumnos);
	}
}
