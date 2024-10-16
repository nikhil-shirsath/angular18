import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';
import { DatabindingComponent } from '../components/databinding/databinding.component';
import { StructuralDirectiveComponent } from '../components/directive/structural-directive/structural-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListEmployeeComponent,AddEmployeeComponent,DatabindingComponent,StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular';
}
