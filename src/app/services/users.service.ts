import { Injectable } from '@angular/core';
import { User } from '../model/modelUsers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poto } from '../model/modelPosts';
import { Todo } from '../model/modelTodos';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  aereeUsers : User[]=[]
  currentUsers :User
  aereePotoOfCurrentUser:Poto[]=[]
  areeTodoOfCurrentUser:Todo[]=[]

  pethUsers:string = "https://jsonplaceholder.typicode.com/users"

  pethPostsOfCurrentUser:string = "https://jsonplaceholder.typicode.com/posts?userId=#"
  pethTodosOfCurrentUser:string = "https://jsonplaceholder.typicode.com/todos?userId=#"


  constructor(public http:HttpClient) { }
  getUsers():Observable<User[]>{
    console.log('getUsers().stert');
    return this.http.get<User[]>(this.pethUsers)
    }

    getPotoOfCurrentUser() : Observable <Poto[]> {
     
      return this.http.get<Poto[]>(this.pethPostsOfCurrentUser.replace('#',this.currentUsers.id.toString()))//
    }

    getTodoOfCurrentUser(): Observable <Todo[]> {
      return this.http.get<Todo[]>(this.pethTodosOfCurrentUser.replace('#',this.currentUsers.id.toString()))
    }

}

