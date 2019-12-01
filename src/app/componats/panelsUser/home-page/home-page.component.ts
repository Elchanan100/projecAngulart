import { Component, OnInit , AfterViewChecked,OnDestroy ,AfterViewInit} from '@angular/core';
import { HomePageService } from '../../../services/home-page.service';
import { Photo } from '../../../model/modelPhotos';
import { Poto } from '../../../model/modelPosts';
import { Commentt } from '../../../model/modelComments';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit  {
  
 
  numberofsetInterval1:number=0
  constructor(public HomePageService:HomePageService) {
    
   }
  

  ngOnInit() {
     this.HomePageService.getAereeTenPhotosLatest()
     .subscribe(data=>{this.HomePageService.aereeTenPhotosLatest=data as Photo[];
      console.log(this.HomePageService.aereeTenPhotosLatest);})

     this.HomePageService.getAereeTenPostsLatest()
     .subscribe(data=>{this.HomePageService.aereeTenPostsLatest=data as Poto[];
        console.log(this.HomePageService.aereeTenPostsLatest);
        this.HomePageService.aereeTenPostsLatest.forEach(pot=>{
              this.HomePageService.getAereeCommentsOpThisPostsLatest(pot.id)
              .subscribe(data=>{this.HomePageService.aereeCommentsOpThisPostsLatest=data as Commentt[];
                pot.Commentt=data;
            });
        })
      })
         setTimeout(this.sohwThisImg, 1500);
    }

    // ngAfterViewChecked(): void {
    //   console.log('ngAfterViewChecked.stert');
    //   // this.sohwThisImg();
    // }
    // ngOnDestroy(): void {
    //   console.log('ngOnDestroy.stert this.numberofsetInterval1 = ' + this.numberofsetInterval1);
    //   clearInterval(6)
    // }
    // ngAfterViewInit(): void {
    //   console.log('ngAfterViewInit.stert');
    //   this.sohwThisImg();
    // }
    sohwThisImg(){
      console.log('sohwThisImg.stert');
     let indexImgShoe = 0
     let indexImgShoePlosOne = 1
     let aree = document.querySelectorAll('.myImgLi')
     console.log(aree[0]);
     this.numberofsetInterval1 = window.setInterval(()=>{
        console.log('this.numberofsetInterval1 = ' + this.numberofsetInterval1);
          aree[indexImgShoe].className='myImgLi';
          aree[indexImgShoePlosOne].className='show';
          indexImgShoe++;
          indexImgShoePlosOne++;
          if(indexImgShoe==aree.length)indexImgShoe=0
          if(indexImgShoePlosOne==aree.length)indexImgShoePlosOne=0
          ;},2000)
      console.log('sohwThisImg  this.numberofsetInterval1 = ' + this.numberofsetInterval1);    
    }
  }   
