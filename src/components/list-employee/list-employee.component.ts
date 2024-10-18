import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [],
  templateUrl: './list-employee.component.html',
  styles: ['.header {color:red}']
})
export class ListEmployeeComponent {

  constructor(private router:Router){

  }

  navigateToOther(){
    this.router.navigateByUrl("structure-directive")
  }
}
