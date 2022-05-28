import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'app-alumno-detalle',
	templateUrl: './alumno-detalle.component.html',
	styleUrls: ['./alumno-detalle.component.scss'],
})

export class AlumnoDetalleComponent implements OnInit {

	constructor(private ruta: ActivatedRoute, public actionSheetC: ActionSheetController) { }

	ngOnInit() {
		this.obtenerDetalleAlumno(this.matricula);
	}

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

	alumnoDetalle: any = {};

	matricula: string = this.ruta.snapshot.params.id;

	obtenerDetalleAlumno(matricula: string): any {
		for (let i = 0; i < this.alumnos.length; i++)
			if (this.alumnos[i].matricula == matricula)
				this.alumnoDetalle = this.alumnos[i];
		return this.alumnoDetalle;
	}

	async mostrarActionSheet() {
		const actionSheet = await this.actionSheetC.create(
			{
				header: 'Opciones',
				cssClass: 'mi-primer-action-sheet',
				buttons: [
					{
						text: 'Delete',
						role: 'destructive',
						icon: 'trash',
						id: 'delete-button',
						data: {
							type: 'delete'
						},
						handler: () => {
							console.log('Delete clicked');
						}
					},
					{
						text: 'Share',
						icon: 'share',
						data: 10,
						handler: () => {
							console.log('Share clicked');
						}
					},
					{
						text: 'Play (open modal)',
						icon: 'caret-forward-circle',
						data: 'Data value',
						handler: () => {
							console.log('Play clicked');
						}
					},
					{
						text: 'Favorite',
						icon: 'heart',
						handler: () => {
							console.log('Favorite clicked');
						}
					},
					{
						text: 'Cancel',
						icon: 'close',
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked');
						}
					}
				]
			}
		);
		await actionSheet.present();

		const { role, data } = await actionSheet.onDidDismiss();
		console.log('onDidDismiss resolved with role and data', role, data);
	}
}
