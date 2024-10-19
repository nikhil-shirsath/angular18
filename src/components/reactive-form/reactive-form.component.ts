import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  employee:FormGroup = new FormGroup({
    firstName :  new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    userName :  new FormControl('',[Validators.required,Validators.minLength(3),Validators.email]),
    state:new FormControl(),
    city :  new FormControl(),
    zipCode:new FormControl(),
    isAcceptTerms: new FormControl(false,[Validators.required])
  
  });

  formValue:any;

  onSubmit(){
    this.formValue= this.employee.value;
  }
}
