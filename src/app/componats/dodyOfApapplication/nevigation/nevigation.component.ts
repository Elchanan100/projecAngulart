import { Component, OnInit } from '@angular/core';
import { ManagerPanelsService } from '../../../services/manager-panels.service';

@Component({
  selector: 'app-nevigation',
  templateUrl: './nevigation.component.html',
  styleUrls: ['./nevigation.component.css']
})
export class NevigationComponent implements OnInit {

  constructor(public ManagerPanelsService:ManagerPanelsService) { }

  ngOnInit() {
  }
  showThisPanel(showThisPanel:string){
   this.ManagerPanelsService.showThisPanel=showThisPanel
  }
}
