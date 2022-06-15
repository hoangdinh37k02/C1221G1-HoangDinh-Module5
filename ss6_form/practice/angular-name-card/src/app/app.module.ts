import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {TodoDeleteComponent} from './todo-delete/todo-delete.component';
import {TodoUpdateComponent} from './todo-update/todo-update.component';
import {AppRoutingModule} from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoCreateComponent,
    TodoDeleteComponent,
    TodoUpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
