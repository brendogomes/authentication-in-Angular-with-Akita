import { SessionStore, SessionState } from './../session/state/session.store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
})
export class HomeComponent implements OnInit {
  stateUserInfo: SessionState;
  funcionarios$: Observable<any>;
  stateUser$: Observable<any>;

  constructor(
    protected store: SessionStore,
  ) {
    this.stateUser$ = this.store._select((state) => state);
    this.stateUser$.subscribe((state) => {
      this.stateUserInfo = state;
      console.log(this.stateUserInfo)
    });
  }

  ngOnInit(): void {}

  changeUser() {
    this.store.atualiza({
      token: 'A5415S1V5D',
      name: 'João Alberto',
      role: 'operador'
    });
  }

  logout() {
    this.store.logout();
  }
}
