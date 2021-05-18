import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

export interface DialogData{
  SerialNo:number;
  ThingsTodo:string;
  DateCreated:string;
  TaskStatus:string;
  
}
@Component({
  selector: 'app-by-date',
  templateUrl: './by-date.component.html',
  styleUrls: ['./by-date.component.css']
})
export class ByDateComponent implements OnInit {
  date='';
  datee=''
  maxDate = new Date();
  tasks=Array();
  constructor( private dialog:MatDialog ,private service: SharedService,private datePipe:DatePipe) { }

  ngOnInit(): void {
    
  }
  openEdit(data:any){
    
    const dialog =this.dialog.open(EditComponent,{data:{
      SerialNo:data.SerialNo,
      ThingsTodo:data.ThingsTodo,
      DateCreated:data.DateCreated,
      TaskStatus:data.TaskStatus
    }});
    dialog.afterClosed().subscribe(()=>{
      this.refreshList();
    })
    
  }

  view(){
    this.refreshList();
  }
  refreshList(){
   
    this.service.getByDate( this.datePipe.transform(this.date, "yyyy-MM-dd")).subscribe(data => {
      this.tasks = data;
    });

    
  }
  getBackgroundColor(val:string){
    if(val=="done"){
      return '#80ffaa';
    }
    else{
      return '#ff8080';
    }
   } 
   delt(item:number){
    if(confirm('Are you sure to delete??')){
      this.service.delt(item).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
    
}
}