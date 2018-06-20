import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import {HttpClient}from '@angular/common/http';


const httpOptions = {
   
  };
  @Injectable()
  export class UserService {
    //private baseUrl:string='http://localhost:8084/user';
   // private user:User;
     constructor(private httpClient:HttpClient) {}

     //LOGIN ADMINA
    loginAdmin(email:any,password:any) {
    this.httpClient.post('http://localhost:8085/reguser/loginAdmin',
    {email:email,
     password:password
    })
    .subscribe(
    (data:any)=>{ alert(data.message); }
    )
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