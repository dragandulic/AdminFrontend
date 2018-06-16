import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared-service/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users=[];
  private stop:any;

  constructor(private _userService:UserService) { }

  ngOnInit() {

    this.reloadUsers();
    
  }
  reloadUsers(){
    this._userService.getUsers().subscribe((data)=>{this.users=data.users;});
  }

  blockUser(id:any) {
    this._userService.blockUser(id).subscribe(
      (data:any)=>{  alert(data.message);this.reloadUsers();}
      );
  }

  unblockUser(id:any) {
    this._userService.unblockUser(id).subscribe(
      (data:any)=>{  alert(data.message);this.reloadUsers();}
      );
  }

  deleteUser(id:any) {
    this._userService.deleteUser(id).subscribe(
      (data:any)=>{  alert(data.message);this.reloadUsers();}
      );
  }
   

}
