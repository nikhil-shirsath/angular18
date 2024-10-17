import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  friends:string[]=['bg-primary', 'bg-secondary', 'bg-success','bg-danger' ,'bg-warning' ,'bg-info', 'bg-light' ,'bg-dark'];

  courses: any[]=[
    {cid:11, cratings:23 , isActive:true , cname:'cdac',cfees:110000,cduration:6},
    {cid:23, cratings:24 , isActive:false , cname:'Btech',cfees:110000,cduration:48},
    {cid:14, cratings:100 , isActive:true , cname:'bsc',cfees:1100,cduration:36},
    {cid:15, cratings:53 , isActive:false , cname:'npcel',cfees:1500,cduration:6},
    {cid:16, cratings:73 , isActive:true , cname:'full stack',cfees:5000,cduration:12},
  ];


  //div css to dinamically apply on the div

  divCss :any ={
    'height':'100px',
    'width':'100px',
    'color':'white',
    'background-color':'yellow',
    'border-radius':'50%'
  }



  div1ClolorClass:string='';
  isDiv2Active:boolean= false;
  num1:string='';
  num2:string='';
  choosedColor:string='';
  addDangerClolor(){
    this.div1ClolorClass= "btn-danger";
  }

  addPrimaryColor(){
    this.div1ClolorClass= "btn-primary";
  }

  toggle(){
    this.isDiv2Active=!this.isDiv2Active;
  }
}
