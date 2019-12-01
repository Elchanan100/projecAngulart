import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Poto } from '../../../model/modelPosts';

@Component({
  selector: 'app-user-poto',
  templateUrl: './user-poto.component.html',
  styleUrls: ['./user-poto.component.css']
})
export class UserPotoComponent implements OnInit {

  constructor(public UsersService:UsersService) { }

  ngOnInit() {
    this.UsersService.getPotoOfCurrentUser().subscribe(data =>{
      this.UsersService.aereePotoOfCurrentUser = data as Poto[]
    })
  }

}
