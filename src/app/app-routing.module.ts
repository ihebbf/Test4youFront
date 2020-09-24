import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {AuthentificationComponent} from './Components/authentification/authentification.component';
import {UploadComponent} from './Components/upload/upload.component';
import {MyVideosComponent} from './Components/my-videos/my-videos.component';
import {WatchVideoComponent} from './Components/watch-video/watch-video.component';



const routes: Routes = [


  {path: 'login', component: AuthentificationComponent},
  {path: 'readVideos', component: WatchVideoComponent},

  {path: 'upload', component: UploadComponent},
  {path: 'myvideos', component: MyVideosComponent},





];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
})

export class AppRoutingModule { }
