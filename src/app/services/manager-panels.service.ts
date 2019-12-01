import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerPanelsService {
  showThisPanel:string ='showPanelOpLogin'

  showUserOptions:string=''

  showUserOptionsTasksOrPosts:string=''

  
  constructor() {
    
   }
}
