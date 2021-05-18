import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-by-status',
  templateUrl: './by-status.component.html',
  styleUrls: ['./by-status.component.css']
})
export class ByStatusComponent implements OnInit {
  tasks=Array();
  statusneeded=''
  constructor(private dialog:MatDialog,private service:SharedService) { }

  ngOnInit(): void {
  }
  
  refreshList(){
   
    this.service.getByStatus(this.statusneeded).subscribe(data => {
      this.tasks = data;
      console.log(data)
    });
    
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
  delt(item:number){
    if(confirm('Are you sure to delete??')){
      this.service.delt(item).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }
  status(statusVariable:string){
    this.statusneeded=statusVariable;
    this.refreshList();
    
  }
 getBackgroundColor(val:string){
  if(val=="done"){
    return '#80ffaa';
  }
  else{
    return ' #ff8080 ';
  }
 } 
}
