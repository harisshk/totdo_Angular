import { Component, Input, OnInit,Inject} from '@angular/core';
import { inject } from '@angular/core/testing';
import {MAT_DIALOG_DATA,MatDialog} from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import {  DialogData } from '../by-date/by-date.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData,private service:SharedService) { }
  task='';
  status='';
  
  ngOnInit(): void {
    this.status=this.data.TaskStatus;
    this.task=this.data.ThingsTodo;
  }
  update(){
    var tasks={ 
      SerialNo:this.data.SerialNo,
      ThingsTodo:this.data.ThingsTodo,
      DateCreated:this.data.DateCreated,
      TaskStatus:this.status
    }
    this.service.update(tasks).subscribe(res=>{
      alert(res.toString())
    });
   
  }
}
