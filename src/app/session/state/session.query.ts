import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';

@Injectable({
	providedIn: 'root'
})

export class SessionQuery extends Query<SessionState> {
	isLoggedIn$ = this.select((state) => toBoolean(state.token));
	state$ = this.select((state) => state);

	constructor(protected override store: SessionStore) {
		super(store);
	}

	isLoggedIn() {
		console.log(this.getValue().token)
		return toBoolean(this.getValue().token);
	}
}
