import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared-service/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private reviews = [];

  constructor(private _userService:UserService) { }

  ngOnInit() {
      this.getReviews();
  }

  getReviews(){
    this._userService.getReviews().subscribe((data)=>{this.reviews=data.reviews;});
  }

  approveComment(id:any){
    this._userService.approveComment(id).subscribe((data)=>{alert(data.message),this.getReviews()});
  }
  unApproveComment(id:any){
    this._userService.unApproveComment(id).subscribe((data)=>{alert(data.message),this.getReviews()});
  }

}
