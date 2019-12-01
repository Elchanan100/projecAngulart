import { Injectable } from '@angular/core';
import { User } from '../model/modelUsers';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
 idUserRendom:number=0
 userLighn:User
 pethUserLogin:string='https://jsonplaceholder.typicode.com/users/#'
  constructor(public http:HttpClient) {
    this.idUserRendom = Math.floor((Math.random() * 10) + 1);
   }
   fullYouUserLighn( num:number):Observable<User>{
    return this.http.get<User>(this.pethUserLogin.replace("#",num.toString()))
   }
}
