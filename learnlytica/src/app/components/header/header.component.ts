import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { SignUpComponent } from '../sign-up/sign-up.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const ref = this.dialog.open
      (ContactFormComponent,

        {
          height: '400px',
          width: '600px',
          disableClose: false
        });
    ref.afterClosed().subscribe(final => {
      console.log('dailog  :${final}');
    });
  }
}
