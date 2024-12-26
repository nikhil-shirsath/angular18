import { Routes } from '@angular/router';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';
import { DatabindingComponent } from '../components/databinding/databinding.component';
import { StructuralDirectiveComponent } from '../components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from '../components/attribute-directive/attribute-directive.component';
import { IfElseLaderComponent } from '../components/controlStatements/if-else-lader/if-else-lader.component';
import { PipesLearningComponent } from '../components/pipes-learning/pipes-learning.component';
import { TemplateFormComponent } from '../components/template-form/template-form.component';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';
import { GetApiCallComponent } from '../components/get-api-call/get-api-call.component';
import { PostApiComponent } from '../components/post-api/post-api.component';
import { PutApiComponent } from '../components/put-api/put-api.component';
import { AllapisComponent } from '../allapis/allapis.component';

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
    {
        path:'control-statement',
        component:IfElseLaderComponent
    },
    {
        path:'pipes-learning',
            component:PipesLearningComponent

    },
    {
        path:'template-form',
            component:TemplateFormComponent

   },
   {
    path:'reactive-form',
        component:ReactiveFormComponent
    },
    {
    path:'get-api',
        component:GetApiCallComponent
    },
    {
    path:'post-api',
        component:PostApiComponent
    },
    {
        path:'put-api',
            component:PutApiComponent
    },
    {
        path:'all-apis',
            component:AllapisComponent
    },

];
