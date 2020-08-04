import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreraMainComponent } from './carrera-main.component';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';
import { CarreraCardComponent } from '../carrera-card/carrera-card.component';
import { CarreraListComponent } from './carrera-list/carrera-list.component';

const routes: Routes = [
  { path: '', component: CarreraMainComponent, children: [
    { path: 'view/:id', component: CarreraCardComponent},
    { path: 'create',  component: CarreraFormComponent},
    { path: '',  component: CarreraListComponent},
    { path: 'update/:id', component: CarreraFormComponent },
    { path: '', redirectTo: '', pathMatch: 'full'},
    {path: '**', redirectTo: ''}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarreraMainRoutingModule { }
