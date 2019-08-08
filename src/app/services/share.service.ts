import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

   public lang:string
  private url:string
  constructor(private http:HttpClient) {
  // this.url = "http://st.sprints.ws/falehapp/public/api/";

    // this.url="https://faleh.app/app/public/api/"

   //this.url = "http://192.168.1.20:8000/api/";
 // this.url="https://faleh.app/new_app/public/api/"

 this.url="https://faleh.app/app/public/api/"

     if (!localStorage.getItem('lang')) {
      // code...
      this.lang='ar'
    }
    else{
      this.lang=localStorage.getItem('lang')
    }

  }


    slider(){

    let httpHeaders = new HttpHeaders({
           //'Accept':'text/html',

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'slider',options);

  }

     links(){

    let httpHeaders = new HttpHeaders({
           //'Accept':'text/html',

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'links',options);

  }
staff(){

    let httpHeaders = new HttpHeaders({
         'Accept':'text/html',

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'staff?lang='+this.lang,options);

  }
terms_of_service(){

    let httpHeaders = new HttpHeaders({
         'Accept':'text/html',

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'terms_of_service?lang='+this.lang,options);

  }
  how_it_works(){

    let httpHeaders = new HttpHeaders({
         'Accept':'text/html',

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'how_it_works?lang='+this.lang,options);

  }

about_faleh(){

    let httpHeaders = new HttpHeaders({
         'Accept':'text/html',

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'about_faleh?lang='+this.lang,options);

  }


  home_index(){

    let httpHeaders = new HttpHeaders({
         'Accept':'text/html',

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'home_index?lang='+this.lang,options);

  }

}
