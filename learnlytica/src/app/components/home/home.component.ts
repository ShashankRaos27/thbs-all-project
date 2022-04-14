import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
myTitle:string='torry harris';
// value:string='100';
// value1:string='400'
  data: any
  //constructor(private myDialog: MatDialog) { }
  constructor(private serv: ConfigService) { }
  ngOnInit(): void {
    this.data = this.serv.getUserList();
    this.serv.getUserList()
      .pipe(
        tap((userList: any) => { //array of object
          return userList.map(
            (element: any, index: Number, arr: any) => {//loop over array
              element['title'] = 'thbs ' + index;
              element['name'] = "Mr. " + element['name'];
              return element; //return object
            })
        })
      ).subscribe((data: any) => { this.data = data });

  }

  // openDialog() {
  //   const dialogRef = this.myDialog
  //     .open(
  //       ContactFormComponent,
  //       {
  //         height: '500px',
  //         width: '600px',
  //         disableClose: true
  //       }
  //     );

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
