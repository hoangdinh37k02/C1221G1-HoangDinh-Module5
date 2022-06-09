import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FacilityComponent} from './facility/facility.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {ContractComponent} from './contract/contract.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'facility'},
  {path: 'facility', component: FacilityComponent},
  {path: 'facility-update', component: FacilityUpdateComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'contract-create', component: ContractCreateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule {
}
