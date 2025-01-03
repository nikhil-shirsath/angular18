import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';
import { DatabindingComponent } from '../components/databinding/databinding.component';
import { StructuralDirectiveComponent } from '../components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from '../components/attribute-directive/attribute-directive.component';
import { IfElseLaderComponent } from '../components/controlStatements/if-else-lader/if-else-lader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,ListEmployeeComponent,AddEmployeeComponent,DatabindingComponent,StructuralDirectiveComponent,AttributeDirectiveComponent
    ,IfElseLaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular';
}
