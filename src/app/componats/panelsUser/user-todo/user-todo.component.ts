import { Component, OnInit, NgModule } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Todo } from '../../../model/modelTodos';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css']
})
export class UserTodoComponent implements OnInit {
  indesOpCurrentTodoOfCurrentUser:number = 0
  constructor(public UsersService:UsersService) { }

  ngOnInit() {
    this.UsersService.getTodoOfCurrentUser().subscribe(data=>{
      this.UsersService.areeTodoOfCurrentUser = data as Todo[];
      console.log('areeTodoOfCurrentUser = 18   ' + this.UsersService.areeTodoOfCurrentUser);
    })
    
  }
  next(){
    console.log(' next()');
    this.indesOpCurrentTodoOfCurrentUser ++
    if(this.indesOpCurrentTodoOfCurrentUser==this.UsersService.areeTodoOfCurrentUser.length){
      console.log('this.indesOpCurrentTodoOfCurrentUser = ' + this.indesOpCurrentTodoOfCurrentUser +'  this.UsersService.areeTodoOfCurrentUser.length ='+ this.UsersService.areeTodoOfCurrentUser.length);
      this.indesOpCurrentTodoOfCurrentUser = 0
    }
    console.log('this.indesOpCurrentTodoOfCurrentUser'+this.indesOpCurrentTodoOfCurrentUser);
    console.log('this.UsersService.areeTodoOfCurrentUser[this.indesOpCurrentTodoOfCurrentUser] = ' + this.UsersService.areeTodoOfCurrentUser[this.indesOpCurrentTodoOfCurrentUser]);  
  }

}
