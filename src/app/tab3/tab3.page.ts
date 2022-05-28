import { Component, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { Alumno } from '../alumno';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
	constructor(private http: HttpClient) {}
	
	modelo: Alumno;
	
	onSubmit(agregarAlumno: NgForm) {
		console.log('submit');
		// request
	}
}
