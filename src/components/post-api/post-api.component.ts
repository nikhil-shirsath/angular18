import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [ReactiveFormsModule] ,
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {


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

    apiCallService = inject(ApiserviceService); //this is user defined service  inject 
    http= inject(HttpClient);

    postform:FormGroup= new FormGroup({
      userId: new FormControl(),
      title:new FormControl(),
      body:new FormControl()
    })


    ngOnInit(): void {
        this.onGetData();
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

    // onGetData(){
    //   debugger;
    //   this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res:any)=>{
    //     debugger;
    //     this.userList=res;
    //   },error=>{
    //     console.log("error occured");
    //   });
    // }

    onGetData(){
      this.apiCallService.getAllApiCall().subscribe((res:any)=>{
        this.userList=res;
      },error=>{
        console.log("error occured")
      });
    }
    
}
