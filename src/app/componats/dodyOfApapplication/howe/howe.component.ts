import { Component, OnInit } from '@angular/core';
import { ManagerPanelsService } from '../../../services/manager-panels.service';

@Component({
  selector: 'app-howe',
  templateUrl: './howe.component.html',
  styleUrls: ['./howe.component.css']
})
export class HoweComponent implements OnInit {

  constructor(public ManagerPanelsService:ManagerPanelsService) { }

  ngOnInit() {
  }

}

