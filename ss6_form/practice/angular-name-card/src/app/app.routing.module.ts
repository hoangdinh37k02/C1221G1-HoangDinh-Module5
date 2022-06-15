import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {TodoDeleteComponent} from './todo-delete/todo-delete.component';
import {TodoUpdateComponent} from './todo-update/todo-update.component';


const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'create', component: TodoCreateComponent},
  {path: 'delete/:id', component: TodoDeleteComponent},
  {path: 'update/:id', component: TodoUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
