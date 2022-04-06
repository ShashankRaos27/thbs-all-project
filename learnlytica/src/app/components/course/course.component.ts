import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
// cardTitle='Git For Beginners';
// currentdt=new Date();
// courseDetail={
//   price:2000,
//   name:'shashank'
// }
card1=[{
  title:'Git For Beginners',
  price:'2000',
  name:'shashank',
  currentdt:new Date(),
  imagelink:'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa18860cf26833c8eca46c/61aa18860cf26833c8eca46c_scaled_cover.jpg?v=1'
},
{
  title:'Mean For Beginners',
  price:'4000',
  name:'priya',
  currentdt:new Date(),
  imagelink:'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa18860cf26833c8eca46c/61aa18860cf26833c8eca46c_scaled_cover.jpg?v=1'
},
{
  title:'Mern For Beginners',
  price:'10000',
  name:'nandan',
  currentdt:new Date(),
  imagelink:'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa18860cf26833c8eca46c/61aa18860cf26833c8eca46c_scaled_cover.jpg?v=1'
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
