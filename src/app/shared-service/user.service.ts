import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import {HttpClient}from '@angular/common/http';
import {LoggedinService}from './loggedin.service';
import {User}from '../model/user';


const httpOptions = {
   
  };
  @Injectable()
  export class UserService {
    //private baseUrl:string='http://localhost:8084/user';
    
     constructor(private httpClient:HttpClient,private _loggedinService:LoggedinService) {}

     //LOGIN ADMINA
    loginAdmin(email:any,password:any) {
    return this.httpClient.post('http://localhost:8085/reguser/loginAdmin',
    {email:email,
     password:password
    })
    
  }

  //RAITING
  addReview(rating:any,userid:any,commentcontent:any,accommodationid:any):Observable<any>{
    return this.httpClient.post('http://localhost:8085/review/addReview',{
    rating:rating,
    userid:userid,
    commentcontent:commentcontent,
    accommodationid:accommodationid
    })
  }




  //COMMENTS
    approveComment(id:any):Observable<any>{
      return this.httpClient.post('http://localhost:8085/comment/approveComment/'+id,{})
    }
    unApproveComment(id:any):Observable<any>{
      return this.httpClient.post('http://localhost:8085/comment/deleteComment/'+id,{})
    }
    getReviews():Observable<any> {
      return this.httpClient.get('http://localhost:8085/review/getUnApprovedComments');
    }



    getUser(id:any):Observable<any> {
      return this.httpClient.get('http://localhost:8085/reguser/getUser/'+id,{});
   }
     getUsers():Observable<any> {
        return this.httpClient.get('http://localhost:8085/reguser/getUsers');
     }

     blockUser(id:any):Observable<any>{
      return this.httpClient.post('http://localhost:8085/reguser/blockUser/'+id,{})
    }

    unblockUser(id:any):Observable<any>{
     return this.httpClient.post('http://localhost:8085/reguser/unblockUser/'+id,{})
    }

    deleteUser(id:any):Observable<any>{
     return this.httpClient.delete('http://localhost:8085/reguser/deleteUser/'+id,{})
    }
  }    