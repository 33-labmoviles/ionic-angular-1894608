import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FirebaseDatabaseService } from '../firebase-database.service';

import { Alumno } from '../alumno';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
	constructor(private db: FirebaseDatabaseService) {}

	nuevoAlumno: any;

	@Input() nombre: string = "";
	@Input() apellido: string = "";
	@Input() matricula: string = "";

	onSubmit(agregarAlumno: NgForm) {
		this.nuevoAlumno = {
			nombre: this.nombre,
			apellido: this.apellido,
			matricula: this.matricula,
			imagen: 'assets/logo-fcfm.jpg'
		};

		this.db.agregarAlumno(this.nuevoAlumno).subscribe(res => {
			console.log('Se agrego correctamente');
		});
	}
}
