import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {DeleteCustomnerComponent} from '../modal/delete-customner/delete-customner.component';
import {RouterModule} from '@angular/router';
import {CustomerRoutingModule} from './customer-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    DeleteCustomnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class CustomerModule { }
