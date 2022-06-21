import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TransactionUpdateComponent } from './transaction-update/transaction-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionCreateComponent,
    TransactionUpdateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
