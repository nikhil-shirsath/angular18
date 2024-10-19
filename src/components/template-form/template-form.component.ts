import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule,FormsModule,JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  student:any={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    pinCode:'',
    isAcceptTurms:false
  }

  selectedState:string='';

  states:string[]=['maharashra','goa','madhya Pradesh','hyderabad'];

  formValue:any;

  onSubmit(){
    debugger;
this.formValue= this.student;
  }

}
