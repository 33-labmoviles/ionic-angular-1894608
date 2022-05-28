import { Component, OnInit } from '@angular/core';

import { FirebaseDatabaseService } from '../firebase-database.service';

@Component({
	selector: 'app-alumnos',
	templateUrl: './alumnos.component.html',
	styleUrls: ['./alumnos.component.scss'],
})

export class AlumnosComponent implements OnInit {
	constructor(private db: FirebaseDatabaseService) { }

	ngOnInit() {
		this.getAlumnos();
	}

	alumnos: any = [];

	getAlumnos() {
		this.db.getAlumnos().subscribe(respuesta => {
			const alumnosRes: any = respuesta;
			const alumnosArray = Object.keys(respuesta).forEach((key: any) => {
				(this.alumnos).push(alumnosRes[key]);
			});
		});
	}
}
