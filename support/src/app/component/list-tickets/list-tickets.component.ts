import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  userList:any
  constructor(private config:UserService) { }

  ngOnInit(): void {
 this.config.getProfiles().subscribe((result:any)=>{
   this.userList=result
   console.log(result)
 })
  }

  

}
