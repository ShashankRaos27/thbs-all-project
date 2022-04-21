import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  cList:any;
  myUserlist:any;
  constructor(private mConfig: ConfigService, private myUser:ConfigService) { }
  ngOnInit(): void {

    this.mConfig.getCourseList().subscribe((data)=>{
      // console.log(data)
      this.cList=data;
    });

    this.myUser.getProfiles().subscribe((results:any)=>
    {
      this.myUserlist=results;
    });
  }

}
