import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else-lader',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './if-else-lader.component.html',
  styleUrl: './if-else-lader.component.css'
})
export class IfElseLaderComponent {

  isDiv1Clicked:boolean=true;
  isShowDiv2 : boolean = true;

  numInput1:string='';
  numInput2:string='';
  num1:number=0;
  num2:number=0;


  selectedDropdown:string='';
  Colors:string[] =['red','blue','black','yellow'];

  Employees:any[]=[
    {
      firstName:'nikhil',
      lastName:'shirsath',
      dob:'31-05-2001',
      education:'CDAC'

    },
    {
      firstName:'pradip',
      lastName:'shirsath',
      dob:'31-05-2003',
      education:'LLB'

    },  {
      firstName:'dipak',
      lastName:'shirsath',
      dob:'31-05-2005',
      education:'BSC'

    },  {
      firstName:'shivam',
      lastName:'gade',
      dob:'31-05-2001',
      education:'CDAC'

    },  {
      firstName:'mahesh',
      lastName:'pawale',
      dob:'31-05-2001',
      education:'CDAC'

    },
  ]

compare(){
  this.num1= parseInt(this.numInput1);
  this.num2 = parseInt(this.numInput2);
}

  clickHide(){
    this.isDiv1Clicked=false;
  }
  clickShow(){
    this.isDiv1Clicked= true;
  }
  toggle(){
    this.isShowDiv2=!this.isShowDiv2;
  }

}
