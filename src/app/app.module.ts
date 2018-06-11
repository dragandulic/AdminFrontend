import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {enableProdMode} from '@angular/core';
import { EncodersComponent } from './components/encoders/encoders.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersComponent } from './components/users/users.component';
import { AddAgentComponent } from './components/addAgent/addAgent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:'encoders',component:EncodersComponent},
  {path:  '', redirectTo: '/encoders', pathMatch: 'full'},
  {path:'comments',component:CommentsComponent},
  {path:'users',component:UsersComponent},
  {path:'addAgent',component:AddAgentComponent},
  
  ];
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EncodersComponent,
    CommentsComponent,
    UsersComponent,
    AddAgentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
