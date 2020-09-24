import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../../Services/firebase.service';

@Component({
  selector: 'app-my-videos',
  templateUrl: './my-videos.component.html',
  styleUrls: ['./my-videos.component.css']
})
export class MyVideosComponent implements OnInit {
  files: any[];

  constructor(private router: Router, private Auth:FirebaseService) {
  }

  ngOnInit(): void {
    //list all videos
    this.Auth.getFiles().subscribe(data => {
      this.files = data.map(e => {
        return {
          id: e.payload.doc.id,
          data:e.payload.doc.data()
        }
      })
    });
  }


}
