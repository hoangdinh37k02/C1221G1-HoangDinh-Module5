import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {DeleteContractComponent} from '../modal/delete-contract/delete-contract.component';
import {ContractUpdateComponent} from './contract-update/contract-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateComponent,
    DeleteContractComponent,
    ContractUpdateComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class ContractModule { }
