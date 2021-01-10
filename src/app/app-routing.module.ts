import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'client', component: ClientComponent},
  {path: ':userId', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
