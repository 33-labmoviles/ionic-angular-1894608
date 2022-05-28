import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActionSheetController } from '@ionic/angular';

import { FirebaseDatabaseService } from '../firebase-database.service';

@Component({
	selector: 'app-alumno-detalle',
	templateUrl: './alumno-detalle.component.html',
	styleUrls: ['./alumno-detalle.component.scss'],
})

export class AlumnoDetalleComponent implements OnInit {

	constructor(private ruta: ActivatedRoute,
		private db: FirebaseDatabaseService,
		public actionSheetC: ActionSheetController) { }

	ngOnInit() {
		this.rellenarDetallesDeAlumno(this.id);
	}

	alumnoDetalle: any = {};

	id: string = this.ruta.snapshot.params.id;

	rellenarDetallesDeAlumno(id: string) {
		this.db.obtenerDetallesDeAlumno(id).subscribe(data => {
			this.alumnoDetalle = data;
		});
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
