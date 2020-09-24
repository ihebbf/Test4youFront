import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{
constructor(private storage: AngularFireStorage, private db: AngularFirestore){}
ngOnInit(): void {
}

  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  files: File[] = [];

  @ViewChild('fileInput') fileInput: any;
  verifExtension: boolean=false;
  uploadFile(event) {

    for(let index = 0; index < event.length; index++) {
      const element = event[index];

      if(element.type==="video/mp4"){
        this.files.push(element);

        this.verifExtension=false;
      }


      else {
        this.verifExtension=true;      }






    }

  }
//function that upload videos and storage them in storage and firestore
   startUpload() {
    for(let index = 0; index < this.files.length; index++) {
      const path = `test/${Date.now()}_${this.files[index].name}`;

      // Reference to storage bucket
      const ref = this.storage.ref(path);

      // The main task
      this.task = this.storage.upload(path, this.files[index]);

      // Progress monitoring
      this.percentage = this.task.percentageChanges();
      this.snapshot   = this.task.snapshotChanges().pipe(
        tap(console.log),
        // The file's download URL
        finalize( async() =>  {
          this.downloadURL = await ref.getDownloadURL().toPromise();
          this.db.collection('files').add( { downloadURL: this.downloadURL, path ,FileName:this.files[index].name},);
        }),
      );

    }

  }

//function that delete attachment before upload
  deleteAttachment(index) {

    this.files.splice(index, 1);
    this.fileInput.nativeElement.value = '';




  }
}

