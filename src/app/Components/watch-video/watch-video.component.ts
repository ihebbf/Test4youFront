import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../../Services/firebase.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.css']
})
export class WatchVideoComponent implements OnInit {
  files: any[];

  constructor(private router: Router, private Auth: FirebaseService,private dom:DomSanitizer) {
  }

  ngOnInit(): void {
    //list all videos
    this.Auth.getFiles().subscribe(data => {
      this.files = data.map(e => {
        return {
          id: e.payload.doc.id,
          data: e.payload.doc.data(),

      }
      })
      console.log(this.files)
    });

  }

}
