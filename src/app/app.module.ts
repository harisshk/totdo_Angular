import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedService} from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {ByStatusComponent} from './view-tasks/by-status/by-status.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabNav, MatTabsModule} from '@angular/material/tabs';


import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { ByDateComponent } from './view-tasks/by-date/by-date.component';
import { DatePipe } from '@angular/common';
import { EditComponent } from './view-tasks/edit/edit.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewTasksComponent,
    ByDateComponent,
    ByStatusComponent,
    EditComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatTabsModule
  ],
  providers: [SharedService,HttpClientModule,DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[EditComponent]
})
export class AppModule { }
