import { Component, OnInit } from '@angular/core';
import {LoggedinService} from '../../shared-service/loggedin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public nowAdmin:any;
  constructor(private _loggedinService:LoggedinService) { }

  ngOnInit() {
      console.log(this.nowAdmin);
     this.nowAdmin=this._loggedinService.getLocalStore();
     console.log(this.nowAdmin);
  }

  logout(){
    this._loggedinService.delLocalStore();
  }

}
