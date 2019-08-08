import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {MakeOffer } from '../models/make-offer';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  //services_id:string

  private url:string
  constructor(private http:HttpClient) {
  // this.url = "http://st.sprints.ws/falehapp/public/api/";


   //this.url = "http://192.168.1.20:8000/api/";

    // this.url="https://faleh.app/new_app/public/api/"

 this.url="https://faleh.app/app/public/api/"

  }



  nakeOffer(services_id,params:{} ,data: FormData){
    // offer.services_id=services_id

    let httpHeaders = new HttpHeaders({
      'enctype' : 'multipart/form-data',
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders,params:params
    };
    return this.http.post<any>(this.url+'make_offer',data,options);

  }
  getOffer(offer_id){
    // offer.services_id=services_id

    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    return this.http.get<any>(this.url+'getOfferByid/'+offer_id,options);

  }

  editoffer(offer_id,params:{},data: FormData)
  {
    //new_url=new_url.toString();
    let httpHeaders = new HttpHeaders({
      'enctype' : 'multipart/form-data',
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders,params:params
    };
    return this.http.post<any>(this.url+'editOffer/'+offer_id,data,options);
  }

}
