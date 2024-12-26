import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormsModule, NgModel } from '@angular/forms';
import { StudentapiserviceService } from '../services/studentapiservice.service';

@Component({
  selector: 'app-allapis',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './allapis.component.html',
  styleUrl: './allapis.component.css'
})
export class AllapisComponent implements OnInit, OnChanges {

  students:any[]=[];
  student:any={
    id:0,
    roll:"",
    name:"",
    mobile:"",
    address:""
  }

  http= inject(HttpClient);
  studentService = inject(StudentapiserviceService);

  @Input() action :any;

  ngOnInit(): void {
      //call method of get all data 
      this.getAllData();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['action']){
        //call method of get all data 
        this.getAllData();
      }
  }

  reset(){
    this.student.id=0;
      this.student.roll="";
      this.student.name="";
      this.student.mobile="";
      this.student.address="";
  }

  getAllData(){
    this.studentService.getAllStudentCall().subscribe((res:any)=>{
      this.students= res;
      console.log(res);
    })
  }

  onSave(student:any){
    this.studentService.addStudentApi(student).subscribe((res)=>{

      alert(res);
      this.getAllData();
      this.reset();
    })
  }

  refresh(){
    this.action = new Date().toISOString();
  }

  onEdit(student:any){
    this.student= student;
  }

  onUpdate(student:any){
    this.studentService.updateStudentApi(student).subscribe((res:any)=>{
      alert(res);
      this.reset();
      this.getAllData();
    })

  }

  onDelete(id:number){
    let confirmVar = confirm("Are you sure want to delete the Record");
    if(confirmVar){
      this.studentService.deleteStudentApi(id).subscribe((res:any)=>{
        alert(res);
        console.log(res);
        this.getAllData();
      })
    }else{
      alert("Not deleting record");
    }
    
  }

}
