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
  hideDiv(){
    this.toShow= false;
  }
  showDiv(){
    this.toShow= true;
  }

  toggle(){
    if(this.toggleControl){
      this.toggleControl= false;
    }else{
      this.toggleControl=true;
    }
  }
}
