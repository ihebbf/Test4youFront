import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../Services/firebase.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

   isLogError: boolean=false;
  FullName: any;

  constructor(public auth: FirebaseService, private router:Router) { }

  ngOnInit(): void {

  }
//login with google function
  loginWithGoogle()
  {

    this.auth.googleSignin(this.FullName)
  }

}
