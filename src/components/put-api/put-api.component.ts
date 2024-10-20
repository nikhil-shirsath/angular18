import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent implements OnInit{


  //json post api uri
  //https://jsonplaceholder.typicode.com/posts
  /**
   * 
   * title: 'foo',
    body: 'bar',
    userId: 1,
   */

    userList:any[]=[];

    postFormData:any;


    postform:FormGroup= new FormGroup({
      userId: new FormControl(),
      title:new FormControl(),
      body:new FormControl()
    })


    http= inject(HttpClient);



    ngOnInit(): void {
        this.getAllData();
    }


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

    getAllData(){
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
        (res:any)=>{
          this.userList= res;
        },error=>{
          console.log("error occured");
        }
      );
    }

    onEdit(obj:any){
      debugger;
      console.log(obj);
      debugger; 
      this.postform.setValue({
        userId: obj.userId,
        title: obj.title,
        body: obj.body
      });
      console.log(this.postform);
    }
    
}




