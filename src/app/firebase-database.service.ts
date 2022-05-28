import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alumno } from './alumno';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class FirebaseDatabaseService {

	constructor(private http: HttpClient) {}

	// GET
	getAlumnos(): Observable<Alumno> {
		return this.http.get<Alumno>('https://alumnos-4e1ea-default-rtdb.firebaseio.com/alumnos.json')
		.pipe(
			//tap(_ => this.log('alumnos')),
			//catchError(this. <Alumno>('alumno', []))
		);
	}

	// GET
	obtenerDetallesDeAlumno(id: string) {
		return this.http.get('https://alumnos-4e1ea-default-rtdb.firebaseio.com/alumnos/' + id + '.json');
	}

	// POST
	agregarAlumno(nuevoAlumno: any) {
		return this.http.post('https://alumnos-4e1ea-default-rtdb.firebaseio.com/alumnos.json', nuevoAlumno);
	}
}
