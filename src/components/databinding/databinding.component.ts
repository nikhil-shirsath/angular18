import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  //datatypes in ts are string , boolean , number, date


  //declaration with initialization 
  studentName: string = "Nikhil shirsath";

  courseName: string = "Angular 18";

  //direct initialization 
  fees = 110000;

  //only declaraation then it will error if we dont initilize it inside the constructor.
  result: boolean;

  dob: Date = new Date();

  inputType: string = "checkbox";

  passwordInput: string = "password";

  radioInput: string = "radio";
  no:number=0;

//for two way data binding 
 stateName:string="";//we have binded it with input field

 //create signal 
 count = signal(0); 

  constructor() {
    this.result = true;
  }

  showAlert(message:string){
    alert(message);
  }

  
  changeCouseName(){
    this.no++;
    if(this.no%2==0){
    this.courseName="React js";
    }else{
      this.courseName="Angular18";
    }
  }

  countClick(){
    this.count.set(this.count()+1);
  }
}
