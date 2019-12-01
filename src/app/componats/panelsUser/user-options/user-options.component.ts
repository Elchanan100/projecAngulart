import { Component, OnInit } from '@angular/core';
import { ManagerPanelsService } from '../../../services/manager-panels.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(public ManagerPanelsService:ManagerPanelsService) { }

  ngOnInit() {
  }
  myClickOfUserOptions(tasksOrPosts:string){
    this.ManagerPanelsService.showUserOptionsTasksOrPosts = tasksOrPosts
    this.ManagerPanelsService.showUserOptions = ''
  }
}
