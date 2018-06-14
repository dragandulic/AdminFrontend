import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../shared-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public form: FormGroup;
  public Users:any;
  
  constructor(private _userService:UserService ,private _router: Router) { }

  ngOnInit() {
      console.log("login");

      this.form = new FormGroup({
        email: new FormControl('',[Validators.required]),
        password: new FormControl('', [Validators.required]),
    })

    this._userService.getUsers().subscribe((data)=>{this.Users=data} );
    console.log("Users ovde ispisuje");
    console.log(this.Users);
  }

  loginForm(){
    let loginfields = this.form.value;
    console.log(loginfields);
   

    //this._userService.loginUser(loginfields);
   // window.location.reload(true);
   // this._router.navigateByUrl("/");
  }

}
