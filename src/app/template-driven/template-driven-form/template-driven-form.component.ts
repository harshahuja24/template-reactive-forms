import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  form={
    address:"",
    username:"",
    email:"",
    branch:"",
    gender:""
  }
  // defaultSelectedValue = 'CMPN'
  submitForm(register:any){

    console.log(this.form)
    console.log(register)
    // console.log(this.defaultSelectedValue)
    //   console.log(register)
  } 

}
