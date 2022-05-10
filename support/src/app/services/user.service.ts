import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { }
  getProfiles() {

    return this.myHttp.get('http://localhost:4200/api/users/tickets') 
  }


}
