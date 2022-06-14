import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import { FacilityUpdateComponent } from './facility-create/facility-update.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ContractComponent } from './contract/contract.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import {RoutingModule} from './routing.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { DeleteCustomnerComponent } from './modal/delete-customner/delete-customner.component';
import { DeleteFacilityComponent } from './modal/delete-facility/delete-facility.component';
import { DeleteContractComponent } from './modal/delete-contract/delete-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    FacilityUpdateComponent,
    CustomerComponent,
    CustomerCreateComponent,
    ContractComponent,
    ContractCreateComponent,
    DeleteCustomnerComponent,
    DeleteFacilityComponent,
    DeleteContractComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
