import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public aip="https://localhost:44375//api";
  constructor(private http:HttpClient ) { }

  gett():Observable<any[]>{
    return this.http.get<any>(this.aip+'/Todo');
  }
  delt(val:any){
    return this.http.delete(this.aip+'/Todo/'+val)
  }
  add(val:any){
    return this.http.post(this.aip+'/Todo',val);
  }
  update(val:any){
    console.log(val);
    return this.http.put(this.aip+'/Todo',val)
  }

  getByDate(val:any){
    return this.http.get<any>(this.aip+'/Search/ByDate?date='+val);
  }

  getByStatus(val:any){
    return this.http.get<any>(this.aip+'/Search/ByStatus?status='+val);
  }

 
}
