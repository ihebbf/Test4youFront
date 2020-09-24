import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import {DragDropDirective} from './drag-drop.directive';

import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { UploadComponent } from './Components/upload/upload.component';
import { MyVideosComponent } from './Components/my-videos/my-videos.component';
import { WatchVideoComponent } from './Components/watch-video/watch-video.component';
import {SafePipe} from './safe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    MyVideosComponent,
    SafePipe,
    AuthentificationComponent,
    DragDropDirective,
    UploadComponent,
    MyVideosComponent,
    WatchVideoComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

    HttpClientModule,
    FormsModule,


  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
