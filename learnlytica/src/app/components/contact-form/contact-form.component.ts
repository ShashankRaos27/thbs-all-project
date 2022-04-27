import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  states = ['karnataka', "Andhra Pradesh", 'Assam', 'Bihar'];
  myform: FormGroup = new FormGroup({
    email: new FormControl('',
      [Validators.required,
      Validators.email,
      Validators.minLength(4)]
    ),
    password: new FormControl('',
      [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)]
    ),
    address1: new FormControl(),
    address2: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
  });
  constructor(private service:ConfigService) { }

  ngOnInit(): void {
  }
  getValues() {
    alert("success fully sign in");
    this.service.submitContactDetails(this.myform.value).subscribe((data)=>{
      console.log(data)
    })
  }
}
