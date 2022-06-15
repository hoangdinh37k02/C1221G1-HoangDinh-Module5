import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private todoService: TodoService, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      id: new   FormControl(),
      content: new FormControl(),
      complete: new FormControl(),
    });
    this.createForm.patchValue({
        complete: false
      }
    );
  }

  createTodo() {
    console.log(this.createForm.value);
    this.todoService.create(this.createForm.value).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }

}
