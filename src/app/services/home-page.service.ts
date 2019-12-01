import { Injectable } from '@angular/core';
import { Photo } from '../model/modelPhotos';
import { Poto } from '../model/modelPosts';
import { Commentt } from '../model/modelComments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
   aereeTenPhotosLatest:Photo[]=[]
   aereeTenPostsLatest:Poto[]=[]
   aereeCommentsOpThisPostsLatest:Commentt[]=[]


   pethOpAereeTenPhotosLatest:string='https://jsonplaceholder.typicode.com/photos?id=4991&id=4992&id=4993&id=4994&id=4995&id=4996&id=4997&id=4998&id=4999&id=5000'
   pethOpAereeTenPostsLatest:string='https://jsonplaceholder.typicode.com/posts?id=91&id=92&id=93&id=94&id=95&id=96&id=97&id=98&id=99&id=100'
  pethOpAereeCommentsOpThisPostsLatest:string='https://jsonplaceholder.typicode.com/comments?postId=#'
  constructor(public http:HttpClient) {}
  getAereeTenPhotosLatest():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.pethOpAereeTenPhotosLatest)
  }
   getAereeTenPostsLatest():Observable<Poto[]>{
     return this.http.get<Poto[]>(this.pethOpAereeTenPostsLatest)
   }
   getAereeCommentsOpThisPostsLatest(postId:number):Observable<Commentt[]>{
     return this.http.get<Commentt[]>(this.pethOpAereeCommentsOpThisPostsLatest.replace('#',(postId.toString())))
   }
}
