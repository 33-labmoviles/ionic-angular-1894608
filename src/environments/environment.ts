// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from 'firebase/app';

export const environment = {
	production: false,
	firebaseConfig: {
		apiKey: 'AIzaSyC1rkuiq6apV9PTV2-9WpnaMgK-ye2R5c4',
		authDomain: 'alumnos-4e1ea.firebaseapp.com',
		databaseURL: 'https://alumnos-4e1ea-default-rtdb.firebaseio.com',
		projectId: 'alumnos-4e1ea',
		storageBucket: 'alumnos-4e1ea.appspot.com',
		messagingSenderId: '1094582654753',
		appId: '1:1094582654753:web:8f0ca85657a194a7839060'
	}
};

const app = initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
