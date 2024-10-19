import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {


  //json post api uri
  //https://jsonplaceholder.typicode.com/posts
  /**
   * 
   * title: 'foo',
    body: 'bar',
    userId: 1,
   */

    userList:any[]=[];

    postform:FormGroup= new FormGroup({
      userId: new FormControl(),
      title:new FormControl(),
      body:new FormControl()
    })

    postFormData:any;

    http= inject(HttpClient);
    onSubmit(){
      debugger;
      this.postFormData= this.postform.value;
      console.log(this.postFormData);
      this.http.post('https://jsonplaceholder.typicode.com/posts',this.postFormData).subscribe((res:any)=>{
        debugger;
        console.log(res);
      },error=>{
        console.log("error occured")
      });
    }
    
}
