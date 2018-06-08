import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {enableProdMode} from '@angular/core';
import { EncodersComponent } from './components/encoders/encoders.component';

const appRoutes:Routes=[
  {path:'encoders',component:EncodersComponent},
  {path:  '', redirectTo: '/encoders', pathMatch: 'full'},
  
  ];
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EncodersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
