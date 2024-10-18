import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../na.pipe';

@Component({
  selector: 'app-pipes-learning',
  standalone: true,
  imports: [FormsModule,UpperCasePipe,LowerCasePipe,CurrencyPipe,DatePipe,TitleCasePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipes-learning.component.html',
  styleUrl: './pipes-learning.component.css'
})
export class PipesLearningComponent {

  nameInput:string="";
  amount:number=0;
  today:Date= new Date();
  student:any={
    roll:123,
    name:'shivam',
    age:23,
    job:''

  };

  userInput:string='';
  currentTime:Observable<Date> = new Observable<Date>;

  constructor(){
    this.currentTime = interval(1000).pipe(map(()=>new Date));
  }
}
