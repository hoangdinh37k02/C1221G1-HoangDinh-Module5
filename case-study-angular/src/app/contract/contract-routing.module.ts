import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractUpdateComponent} from './contract-update/contract-update.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';


const routes: Routes = [
  {path: 'update/:id', component: ContractUpdateComponent},
  {path: 'list', component: ContractListComponent},
  {path: 'create', component: ContractCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
