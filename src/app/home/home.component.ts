import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {SharedService} from 'src/app/shared.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public serialNo:any;
  EnteredTask='';
  public DateCreated = new Date();
  constructor(private service:SharedService,private datePipe:DatePipe) {
    
   }

  ngOnInit(): void {
    
  }
  addTask(val:any){
    var val1={serialNo:this.serialNo,
      ThingsTodo:val,DateCreated: this.datePipe.transform(this.DateCreated, "yyyy-MM-dd"),TaskStatus:"undone"}
    this.service.add(val1).subscribe(res=>{
      alert(res.toString())});
      this.EnteredTask='';
     
  }

 
}
