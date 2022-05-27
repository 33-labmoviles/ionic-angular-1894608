import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-alumno-detalle',
	templateUrl: './alumno-detalle.component.html',
	styleUrls: ['./alumno-detalle.component.scss'],
})

export class AlumnoDetalleComponent implements OnInit {
	
	constructor(private ruta: ActivatedRoute) { }
	
	ngOnInit() {
		this.obtenerDetalleAlumno(this.matricula);
	}

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

	alumnoDetalle: any = {};

	matricula: string = this.ruta.snapshot.params.id;

	obtenerDetalleAlumno(matricula: string): any {
		for (let i = 0; i < this.alumnos.length; i++)
			if (this.alumnos[i].matricula == matricula)
				this.alumnoDetalle = this.alumnos[i];
		return this.alumnoDetalle;
	}
}
