import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  constructor(private myHttp: HttpClient) { }
  getCourseConfigs() {
    return this.myHttp.get('https://httpstat.us/200');
  }
  getCourseList() {
    return this.myHttp.get('assets/mock-data/courses-list.json');
  }
  getUserList() {
    return this.myHttp.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  }
  getProfiles() {
    return this.myHttp.get('http://localhost:4200/api/users');
   }
   submitContactDetails(data:any){
     return this.myHttp.post('http://localhost:4200/api/users/contact',data)
   }
}
