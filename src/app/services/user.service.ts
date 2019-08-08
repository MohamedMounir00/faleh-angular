import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {NewOrder } from '../models/new-order';
import {orderdetails } from '../models/orderdetails';

interface Location{
	latitude:string;
	longitude:string;
}
@Injectable({
  providedIn: 'root'
})

export class UserService {
  public lang:string
  private url:string
  constructor(private http:HttpClient) {
  // this.url = "http://st.sprints.ws/falehapp/public/api/";

    this.url="https://faleh.app/app/public/api/"

   //this.url = "http://192.168.1.20:8000/api/";
//  this.url="https://faleh.app/new_app/public/api/"

 //this.url="https://faleh.app/app/public/api/"

     if (!localStorage.getItem('lang')) {
      // code...
      this.lang='ar'
    }
    else{
      this.lang=localStorage.getItem('lang')
    }

  }



  createOrder(data: FormData, params: {}){

    let httpHeaders = new HttpHeaders({
      'enctype' : 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'Allow-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders, params: params
    };
    
    return this.http.post<any>(this.url+'add_question_answer',data,options);

  }

  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=88e2ced98fa10278c8be31af000916b5')
  }


  currentOrders(status:String,offset_id){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'get_service?offset_id='+offset_id,{status:'current'},options);

  }


  oldOrders(status:string,offset_id){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'get_service?offset_id='+offset_id,{status:'old'},options);

  }

  //////////////////////////////////////

  orderDetalis(service_id:string){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'get_service_details?with_questions=123&lang='+this.lang,{service_id},options);

  }


  getProvider(service_id:string,shipment,payment_method2){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'get_service_providers/'+service_id,{payment_method:payment_method2,delivery:shipment,rate:1,lang:this.lang},options);

  }


    getProvider_filter(service_id:string,payment_method,delivery,rate){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'get_service_providers/'+service_id,{payment_method:payment_method,delivery:delivery,rate:rate,lang:this.lang},options);

  }
  sendProvider(provider_id,service_id){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    return this.http.post<any>(this.url+'updateserives',{provider_id,service_id},options);

  }

  getOffers(service_id){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'get_offer/'+service_id,options);

  }
  acceptOffer(offer_id,offer_value){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'accept_offer/'+offer_id,{offer_value:offer_value},options);

  }


  regusedOffer(offer_id){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'refused_offer/'+offer_id,{},options);

  }


  acceptOrder(stars,comment,services_id){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'finish_service',{service_id:services_id,comment:comment,stars:stars},options);

  }

  refusedOrder(refused_reason,services_id){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'refuse_service',{service_id:services_id,refused_reason:refused_reason},options);

  }

  Invoice(services_id){

    let httpHeaders = new HttpHeaders({

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'Invoice_anguler/'+services_id,options);

  }

  recipts(services_id){

    let httpHeaders = new HttpHeaders({
     'Accept':'application/pdf',
          'Authorization' : 'Bearer ' + localStorage.getItem('token')

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'recipts/'+services_id,{},options);

  }

  add_issue(issue,services_id){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),
    });
    let options = {

      headers: httpHeaders
    };


    return this.http.post<any>(this.url+'add_issue',{service_id:services_id,issue:issue},options);

  }


  spoort(){

    let httpHeaders = new HttpHeaders({
           'Accept':'text/html',

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'tech_sport?lang='+this.lang,options);

  }
 
}


