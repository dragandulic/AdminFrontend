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
import { LoginComponent } from './components/login/login.component';
import { UserService } from './shared-service/user.service';
import {HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {AgentService} from './shared-service/agent.service';
import {EncodersService} from './shared-service/encoders.service';
import { ReviewComponent } from './components/review/review.component';
import {LoggedinService} from './shared-service/loggedin.service';
import {Ng2Webstorage} from 'ngx-webstorage';


const appRoutes:Routes=[
  {path:'encoders',component:EncodersComponent},
  {path:  '', redirectTo: '', pathMatch: 'full'},
  {path:'comments',component:CommentsComponent},
  {path:'users',component:UsersComponent},
  {path:'addAgent',component:AddAgentComponent},
  {path:'login',component:LoginComponent},
  {path:'review',component:ReviewComponent},
  
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
    LoginComponent,
    ReviewComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    Ng2Webstorage
  ],
  providers: [UserService,HttpModule,AgentService,EncodersService,LoggedinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
