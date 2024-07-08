import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  // init is a state of the component
  // this function is fired when the component is initialized
  // it is initialized after the constructor 
  ngOnInit(){

    console.log("Hello in ngOninit")
    this.registerForm.valueChanges.subscribe((value:any)=>{

      console.log(this.registerForm)
      console.log(value)


    })

  }

  registerForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl(),
    address: new FormControl(),
    gender: new FormControl(),
    branch: new FormControl()

  })

  
  // username = new FormControl()
  submit(){
  
    console.log('Hey!')
  }

  // usernameTouched(){
  //   if( this.registerForm.get(['username'])?.touched ){
  //     return false
  //   }
  //   else{
  //     return true
  //   }
  // }

  setvaluesToControls(){
    // this.registerForm.setValue({
    //   username:"xyz@123456",
    //   email:"xyz@gmail.com",
    //   password:"",
    //   address:"101, Defailsysbssb",
    //   gender:"female",
    //   branch:"AIDS"
    // })

    // this.registerForm.patchValue({
    //   username:"abcd@123",
    //   email:"Fasct@123"
    // })

    this.registerForm.get('username')?.setValue('lalalalala')
  }

}
