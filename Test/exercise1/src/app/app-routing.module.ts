import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionComponent} from "./transaction/transaction.component";
import {TransactionCreateComponent} from "./transaction-create/transaction-create.component";



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'transaction'},
  {path:'transaction', component: TransactionComponent},
  {path:'transaction-create', component: TransactionCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
