import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
listLangs:string[]=['eng','hindi','tamil'];
email:any;
  constructor() { }
  ngOnInit(): void {
  }
getFormsValue(fval:any){
  console.log(fval)
}
}
