import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HoweComponent } from './componats/dodyOfApapplication/howe/howe.component';
import { HeaderComponent } from './componats/dodyOfApapplication/header/header.component';
import { NevigationComponent } from './componats/dodyOfApapplication/nevigation/nevigation.component';
import { BodyComponent } from './componats/dodyOfApapplication/body/body.component';
import { UsersComponent } from './componats/panelsUser/users/users.component';
import { UserOptionsComponent } from './componats/panelsUser/user-options/user-options.component';
import { UserTodoComponent } from './componats/panelsUser/user-todo/user-todo.component';
import { UserPotoComponent } from './componats/panelsUser/user-poto/user-poto.component';
import { HomePageComponent } from './componats/panelsUser/home-page/home-page.component';
import { FamilyPageFatherComponent } from './componats/familyPages/family-page-father/family-page-father.component';
import { FamilyPageSonComponent } from './componats/familyPages/family-page-son/family-page-son.component';
import { FamilyPageGrandsonComponent } from './componats/familyPages/family-page-grandson/family-page-grandson.component';
import { LoginPanelComponent } from './componats/panels/login-panel/login-panel.component';
import { AlbumsComponent } from './componats/panels/albums/albums.component';


@NgModule({
  declarations: [
    AppComponent,
    HoweComponent,
    HeaderComponent,
    NevigationComponent,
    BodyComponent,
    UsersComponent,
    UserOptionsComponent,
    UserTodoComponent,
    UserPotoComponent,
    HomePageComponent,
    FamilyPageFatherComponent,
    FamilyPageSonComponent,
    FamilyPageGrandsonComponent,
    LoginPanelComponent,
    AlbumsComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
