import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './session/login/login.component';
import { AuthGuard } from './session/session-guard';

const routes: Routes = [
  {
		path: 'login',
		component: LoginComponent
	},
  {
		path: 'home',
		canActivate: [AuthGuard],
		component: HomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
