import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {FirebaseService} from './Services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navigationSubscription
  role:string;
  constructor(public router: Router, public authService: FirebaseService, public afAuth: AngularFireAuth) {

    // subscribe to the router events. Store the subscription so we can
    // unsubscribe later.
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  ngOnInit() {
  }
//logout function
  Logout() {
this.authService.signOut()
  }


}
