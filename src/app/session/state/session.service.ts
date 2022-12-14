import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { SessionDataService } from './session-data.service';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	constructor(private authStore: SessionStore, private authDataService: SessionDataService) { }

	login(credentials: any) {
		return this.authDataService.login(credentials).pipe(tap((session) => this.authStore.login(session)));
	}

	logout() { 
		this.authStore.logout();
	}
}
