import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() configs: any;
  @Input() imgid: any;
  imgUrl: any;
  data = 'this';

  courseTitle = ""
  currentDate = new Date();

  // card = [{
  //   title: 'Git For Beginners',
  //   price: '2000',
  //   name: 'shashank',
  //   currentdt: new Date(),
  //   imagelink: `https://dz8fbjd9gwp2s.cloudfront.net/courses/61a9e34f0cf2f90364772b94/61a9e34f0cf2f90364772b94_scaled_cover.jpg?v=1`
  // },
  // {
  //   title: 'Mean For Beginners',
  //   price: '4000',
  //   name: 'priya',
  //   currentdt: new Date(),
  //   imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa18860cf26833c8eca46c/61aa18860cf26833c8eca46c_scaled_cover.jpg?v=1'
  // },
  // {
  //   title: 'Mern For Beginners',
  //   price: '10000',
  //   name: 'nandan',
  //   currentdt: new Date(),
  //   imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61ae538d0cf272041d79ddd9/61ae538d0cf272041d79ddd9_scaled_cover.jpg?v=1'
  // },
  // {
  //   title: 'java For Beginners',
  //   price: '5000',
  //   name: 'suraj',
  //   currentdt: new Date(),
  //   imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61a70fae0cf28f8b4fca1aca/61a70fae0cf28f8b4fca1aca_scaled_cover.jpg?v=1'
  // }
  // ];
  constructor(private myconfig: ConfigService) { }

  ngOnInit(): void {
    this.imgUrl = `https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`;



    console.log('I am in child component');



    console.log(this.configs);
      this.myconfig.getCourseConfigs().subscribe(
       (data: any) => {
           console.log(data)
        });

      console.log(this.configs)
    }


  } 
  // ngOnChanges(changes: SimpleChanges) {

  //   console.log(`ngOnChanges - data is ${this.data}`);

  // }



  // ngOnInit() {

  //   console.log(`ngOnInit  - data is ${this.data}`);

  // }



  // ngDoCheck() {

  //   console.log("ngDoCheck");

  // }



  // ngAfterContentInit() {

  //   console.log("ngAfterContentInit");

  // }



  // ngAfterContentChecked() {

  //   console.log("ngAfterContentChecked");

  // }



  // ngAfterViewInit() {

  //   console.log("ngAfterViewInit");

  // }



  // ngAfterViewChecked() {

  //   console.log("ngAfterViewChecked");

  // }



  // ngOnDestroy() {

  //   console.log("ngOnDestroy");

  // }
