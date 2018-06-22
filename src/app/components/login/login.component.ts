import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../shared-service/user.service';
import {User} from '../../model/user';
import {LoggedinService} from '../../shared-service/loggedin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public form: FormGroup;
  public users:any;
  public user:User;
  
  constructor(private _userService:UserService ,private _router: Router,private _loggedinService:LoggedinService ) { }

  ngOnInit() {
      console.log("login");

      this.form = new FormGroup({
        email: new FormControl('',[Validators.required]),
        password: new FormControl('', [Validators.required]),
    })

    this._userService.getUsers().subscribe((data)=>{this.users=data} );
    console.log("Users ovde ispisuje");
  }

  loginForm(){
    let loginfields = this.form.value;
    console.log(loginfields);
    this._userService.loginAdmin(loginfields.email,loginfields.password).subscribe(
      (data:any)=>{ alert(data.message);
      
        if(data.message=="Admin is logged in"){
          
          this._loggedinService.setLocalStore(loginfields.email);
        }
      
      }
      );
  }

}
