import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  states = ['karnataka', "Andhra Pradesh", 'Assam', 'Bihar'];
  myform:FormGroup= new FormGroup({
email:new FormControl(),
password:new FormControl(),
address1:new FormControl(),
address2:new FormControl(),
city:new FormControl(),
state:new FormControl(),
zip:new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }
  getValues() {
    alert("success fully sign in");
  }
}
