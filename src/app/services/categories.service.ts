import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Category } from '../models/main-category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
public lang:string
  private url:string
  constructor(private http:HttpClient) {
  //this.url = "http://st.sprints.ws/falehapp/public/api/";

  //this.url = "http://192.168.1.20:8000/api/";
   //this.url="https://faleh.app/new_app/public/api/"
this.url="https://faleh.app/app/public/api/"

   if (!localStorage.getItem('lang')) {
      // code...
      this.lang='ar'
    }
    else{
      this.lang=localStorage.getItem('lang')
    }

  }

  getMainCategory(){


    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache',
      'Allow-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {
      headers: httpHeaders
    };
    return this.http.get(this.url+'main_categories?lang='+this.lang,options);
  }

  getSubCategory(cat:Category){
  	return this.http.post(this.url+'sub_categories?lang='+this.lang,cat);
  }

  getQuestion(){

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {
      headers: httpHeaders
    };
    
    return this.http.post(this.url+'service_creator',{lang:this.lang},options);

  }
}
