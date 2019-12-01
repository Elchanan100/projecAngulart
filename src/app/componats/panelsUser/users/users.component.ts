import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../model/modelUsers';
import { ManagerPanelsService } from '../../../services/manager-panels.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public UsersService:UsersService,public ManagerPanelsService:ManagerPanelsService) { }

  ngOnInit() {
    this.UsersService.getUsers()
    .subscribe(d=>{
      console.log('.subscribe().stert');
      this.UsersService.aereeUsers = d as User[];
      this.UsersService.currentUsers = this.UsersService.aereeUsers[0];
      console.log(this.UsersService.aereeUsers);
     })
  }
   clickOnUser(user:User) {

    this.UsersService.currentUsers=user
    this.ManagerPanelsService.showUserOptionsTasksOrPosts=''
    this.ManagerPanelsService.showUserOptions = 'show'
  }
}
