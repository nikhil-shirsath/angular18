import { Routes } from '@angular/router';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';
import { DatabindingComponent } from '../components/databinding/databinding.component';
import { StructuralDirectiveComponent } from '../components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from '../components/attribute-directive/attribute-directive.component';

export const routes: Routes = [
    {
        path:'list-employee',
        component:ListEmployeeComponent
    },
    {
        path:'add-employee',
        component:AddEmployeeComponent
    },
    {
        path:'data-binding',
        component:DatabindingComponent
    },
    {
        path:'structure-directive',
        component:StructuralDirectiveComponent
    },
    {
        path:'attribute-directive',
        component:AttributeDirectiveComponent
    },
   

];
