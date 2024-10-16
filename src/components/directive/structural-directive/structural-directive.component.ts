import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  countryName:string="";
  toShow:boolean= true;
  toggleControl:boolean=true;
 
  firstInput:string='';
  secondInput:string='';

  nameArray:string[]=['nikhil','mahesh','shivam','abhishek'];

  selectedName:string="";
//array of objects in ts 

  courses: any[]=[
    {cid:11,cname:'cdac',cfees:110000,cduration:6},
    {cid:23,cname:'Btech',cfees:110000,cduration:48},
    {cid:14,cname:'bsc',cfees:1100,cduration:36},
    {cid:154,cname:'npcel',cfees:1500,cduration:6},
    {cid:16,cname:'full stack',cfees:5000,cduration:12},
  ];


  hideDiv(){
    this.toShow= false;
  }
  showDiv(){
    this.toShow= true;
  }

  toggle(){
     this.toggleControl= !this.toggleControl;
    // if(this.toggleControl){
    //   this.toggleControl= false;
    // }else{
    //   this.toggleControl=true;
    // }
  }
}
