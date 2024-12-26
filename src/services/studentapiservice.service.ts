import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentapiserviceService {
  url:string ="http://localhost:8080/api";
  constructor(private http : HttpClient) { }

  getAllStudentCall(){
    return this.http.get(this.url+"/candidates");
  }

  addStudentApi(student:any){
    return this.http.post(`${this.url}/candidate/add`,student);
  }

  updateStudentApi(student:any){
    return this.http.put(`${this.url}/candidate/update/${student.id}`,student);
  }

  deleteStudentApi(id:number){
    return this.http.delete(`${this.url}/candidate/delete/${id}`);
  }
  
}
