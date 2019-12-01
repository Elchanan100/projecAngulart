import { Component, OnInit } from '@angular/core';
import { ManagerPanelsService } from '../../../services/manager-panels.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public ManagerPanelsService:ManagerPanelsService) { }

  ngOnInit() {
  }

}
