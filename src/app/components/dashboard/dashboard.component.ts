import { Component, OnInit } from '@angular/core';
import {LoggedinService} from '../../shared-service/loggedin.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public nowAdmin:any;
  constructor(private _loggedinService:LoggedinService,private _router: Router) { }

  ngOnInit() {
      console.log(this.nowAdmin);
     this.nowAdmin=this._loggedinService.getLocalStore();
     console.log(this.nowAdmin);
  }

  logout(){
    this._loggedinService.delLocalStore();
    window.location.reload(true);
    this._router.navigateByUrl("/login");
    
  }

}
