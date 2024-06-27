import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public httpClient: HttpClient) { }

  public addTodo(obj:any){
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/todo/create", obj);
  }


}
