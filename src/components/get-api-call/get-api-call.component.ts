import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api-call',
  standalone: true,
  imports: [],
  templateUrl: './get-api-call.component.html',
  styleUrl: './get-api-call.component.css'
})
export class GetApiCallComponent {
  userList:any[]=[];

  constructor(private http :HttpClient){
    
  }

  getAllApi(){
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response:any)=>{
      debugger;
      this.userList=response;
    });
  }

}
