import { Component, OnInit } from '@angular/core';
import { ManagerPanelsService } from '../../../services/manager-panels.service';
import { LoginServicesService } from '../../../services/login-services.service';
import { User } from '../../../model/modelUsers';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {
  idUserRendom:number=0
  constructor(public ManagerPanelsService:ManagerPanelsService,public LoginServicesService:LoginServicesService) {
    this.idUserRendom= Math.floor((Math.random() * 10) + 1);
    
   }
  b:number 
  ogOnDestroy() {
  }
   ngOnInit(){
    this.LoginServicesService.fullYouUserLighn(this.LoginServicesService.idUserRendom).subscribe(date=>{
      this.LoginServicesService.userLighn = date as User;
      console.log('this.LoginServicesService.userLighn   =  ' ,  this.LoginServicesService.userLighn);
    })
  }
  login(){
   if(!this.b){
     console.log(this.b );
      
   this.b =1}
   else {this.b++}
   if(this.b>5000){
     console.log('this.ManagerPanelsService.showThisPanel =='+this.ManagerPanelsService.showThisPanel);
     
     this.ManagerPanelsService.showThisPanel="showPanelOphomePage"
     console.log('this.ManagerPanelsService.showThisPanel =='+this.ManagerPanelsService.showThisPanel);
   }
  }
}
