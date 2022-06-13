import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import { FacilityUpdateComponent } from './facility-update/facility-update.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ContractComponent } from './contract/contract.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import {RoutingModule} from './routing.module';
import {RouterModule} from '@angular/router';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

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
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
