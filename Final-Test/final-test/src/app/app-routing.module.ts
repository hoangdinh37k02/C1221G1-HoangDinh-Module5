import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehicleListComponent} from "./vehicle-list/vehicle-list.component";
import {VehicleUpdateComponent} from "./vehicle-update/vehicle-update.component";
import {VehicleCreateComponent} from "./vehicle-create/vehicle-create.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'vehicle-list'},
  {path: 'vehicle-list', component: VehicleListComponent},
  {path: 'vehicle-update/:id', component: VehicleUpdateComponent},
  {path: 'vehicle-create', component: VehicleCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
