import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../../../services/login-services.service';
import { User } from '../../../model/modelUsers';
import { AlboumsServiceService } from '../../../services/panelsServics/alboums-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(public LoginServicesService:LoginServicesService,public AlboumsServiceService:AlboumsServiceService) { }

  ngOnInit() {
    if(!this.LoginServicesService.userLighn){
        this.LoginServicesService.fullYouUserLighn(this.LoginServicesService.idUserRendom)
            .subscribe(date=>{
            this.LoginServicesService.userLighn = date as User;
            console.log('this.LoginServicesService.userLighn   =  ' ,  this.LoginServicesService.userLighn);
            })
    }
  }
  clickShowMyAlbums(){
    document.querySelector('.hereAlbumsIsShow').innerHTML = this.LoginServicesService.userLighn.name
    console.log('write:app-albums.ts in f clickShowMyAlbums() -'
              ,'document.querySelector(".hereAlbumsIsShow").innerHTML = '
              ,document.querySelector('.hereAlbumsIsShow').innerHTML
              ,'  this.LoginServicesService.userLighn.name  ='
              , this.LoginServicesService.userLighn.name );  
  }
}
