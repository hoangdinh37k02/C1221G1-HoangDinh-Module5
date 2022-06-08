import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityComponent } from './facility/facility.component';
import { FacilityUpdateComponent } from './facility-update/facility-update.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    FacilityUpdateComponent,
    CustomerComponent,
    CustomerCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
