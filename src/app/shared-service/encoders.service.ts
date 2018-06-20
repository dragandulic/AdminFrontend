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
  export class EncodersService {
    //private baseUrl:string='http://localhost:8084/user';
   // private user:User;
     constructor(private httpClient:HttpClient) {}

     getTypes():Observable<any> {
        return this.httpClient.get('http://localhost:8085/atypes/getATypes');
     }

     addType(typeName:string):Observable<any> {
        return this.httpClient.post('http://localhost:8085/atypes/addType/'+typeName,{});
     }

     deleteType(typeName:string):Observable<any> {
      return this.httpClient.delete('http://localhost:8085/atypes/deleteType/'+typeName,{});
     }


     getCategories():Observable<any> {
      return this.httpClient.get('http://localhost:8085/category/getCategories');
     }

     addCategory(categoryName:string):Observable<any> {
      return this.httpClient.post('http://localhost:8085/category/addCategory/'+categoryName,{});
     }

     deleteCategory(categoryName:string):Observable<any> {
      return this.httpClient.delete('http://localhost:8085/category/deleteCategory/'+categoryName,{});
     }


     getAdditionalServices():Observable<any> {
      return this.httpClient.get('http://localhost:8085/aservices/getAServices');
     }

     addAdditionalService(serviceName:string):Observable<any> {
      return this.httpClient.post('http://localhost:8085/aservices/addService/'+serviceName,{});
     }

     deleteAdditionalService(serviceName:string):Observable<any> {
      return this.httpClient.delete('http://localhost:8085/aservices/deleteService/'+serviceName,{});
     }
  }    