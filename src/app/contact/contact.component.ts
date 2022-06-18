import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.form = fb.group({  
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
      firstName: ['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z]{2,15}")]],
      lastName: ['',[Validators.required,Validators.pattern("^[a-zA-Z][a-zA-Z]{2,20}")]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      text:['']
    })  

   }
  get f(){  
    return this.form.controls;  
  }  
  sendForm()
  {
    window.alert("Your form has been sent");
    this.form = this.fb.group({  
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
      firstName: ['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z]{2,15}")]],
      lastName: ['',[Validators.required,Validators.pattern("^[a-zA-Z][a-zA-Z]{2,20}")]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      text:['']
    })

  }
  submit(){  
    console.log(this.form.value);  
  }  
}
