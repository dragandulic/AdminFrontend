import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {UserService} from '../../shared-service/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public form: FormGroup;
  private cleanliness:number=10;
  private comfort:number=10;
  private facilities:number=10;
  private location:number=10;
  private staff:number=10;
  private valueForMoney:number=10;
  private rating:number=0;

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
        comment: new FormControl('',[Validators.required]),
    })
  }

  selectChangeCleanliness(event:any){
     this.cleanliness=event.target.value;
  }
  selectChangeComfort(event:any){
    this.comfort=event.target.value;
  }
  selectChangeFacilities(event:any){
    this.facilities=event.target.value;
  }
  selectChangeLocation(event:any){
    this.location=event.target.value;
  }
  selectChangeStaff(event:any){
    this.staff=event.target.value;
  }
  selectChangeValueForMoney(event:any){
    this.valueForMoney=event.target.value;
  }
   

  sendReview(){
    let reviewfield = this.form.value;
    console.log(reviewfield.comment);
    this.rating=(this.cleanliness*1+this.comfort*1+this.facilities*1+this.location*1+this.staff*1+this.valueForMoney*1)/6;
    console.log(this.rating);
    this._userService.addReview(this.rating,1,reviewfield.comment,1).subscribe((data)=>{alert(data.message)});
    
  }
}
