import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public lang:string

  private url:string
  constructor(private http:HttpClient) {
  // this.url = "http://st.sprints.ws/falehapp/public/api/";


 // this.url = "http://192.168.1.20:8000/api/";
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



  getMessage(receiver_id){

    let httpHeaders = new HttpHeaders({

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };

    return this.http.post<any>(this.url+'getConversationMessages',{receiver_id:receiver_id},options);

  }
  sendMessage(receiver_id,text){

    let httpHeaders = new HttpHeaders({

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };

    return this.http.post<any>(this.url+'send_message',{receiver_id:receiver_id,text:text,type:'text'},options);

  }
  getUserConversation(){

    let httpHeaders = new HttpHeaders({

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };

    return this.http.post<any>(this.url+'getUserConversations',{lang:this.lang},options);

  }


}
