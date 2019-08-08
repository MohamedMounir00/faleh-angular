import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {SaveNewUser } from '../models/save-new-user';
import {SaveNewProvider } from '../models/save-new-provider';
import {updateUser } from '../models/update-user';
import {updateUprovider } from '../models/update-provider';

interface Location{
  latitude:string;
  longitude:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  name:string
  public lang:string
  private url:string
  constructor(private http:HttpClient) {

      if (!localStorage.getItem('lang')) {
      // code...
      this.lang='ar'
    }
    else{
      this.lang=localStorage.getItem('lang')
    }
 //this.url = "http://st.sprints.ws/falehapp/public/api/";
    //this.url = "http://192.168.1.20:8000/api/";
   //this.url="https://faleh.app/new_app/public/api/"
this.url="https://faleh.app/app/public/api/"

  }
  //countryValue = {name:'',email:'',phone:'',password:'',nationality:'',gender:'',bank_account:'',role:'',Latitude:'',Longitude:'',study_level:''}
  getCountry()
  {
    return this.http.get(this.url+'country');
  }

  getStudyLevelForUser()
  {
  
    return this.http.get(this.url+'level_studies?type=student&lang='+this.lang);
  }

  getStudyLevelForProvider()
  {
    return this.http.get(this.url+'level_studies?type=provider&lang='+this.lang);
  }

  getcategories()
  {
    return this.http.get(this.url+'categories?lang='+this.lang);

  }
  saveUser(user:SaveNewUser)
  {
    user.bank_account = 'bank_account';
    //user.Latitude ='0.0';
    // user.Longitude ='0.0';
    user.role='client';
    return this.http.post<any>(this.url+'singupclint',user);

  }


  saveProvider(provider:SaveNewProvider)
  {
    provider.device_token = 'device_token';
    // provider.Latitude ='0.0';
    // provider.Longitude ='0.0';
    provider.role='provider';
    let category = provider.categories.toString();
   provider.category=category
    return this.http.post<any>(this.url+'signupserviceprovider',provider);

  }
  login(user:SaveNewUser)
  {
    return this.http.post<any>(this.url+'Login',user);
  }
  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=88e2ced98fa10278c8be31af000916b5')
  }





  ////////////////////////////////////////get profile

  getUser(user_id){

    let httpHeaders = new HttpHeaders({

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };

    return this.http.get<any>(this.url+'getuser/'+user_id+'?lang='+this.lang,options);

  }


  getProvider(user_id){

    let httpHeaders = new HttpHeaders({

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };

    return this.http.post<any>(this.url+'porvider_profile',{user_id:user_id},options);

  }
  updateuser(user_id,user:updateUser){
    let httpHeaders = new HttpHeaders({

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    user.bank_account = 'bank_account';
    //user.Latitude ='0.0';
    //  user.Longitude ='0.0'
    return this.http.post<any>(this.url+'updateUser/'+user_id,
      {name:user.Name,
        phone:user.phoneNumber,
        email:user.email,
        password:user.password,
        nationality:user.nationality_id,study_level:user.study_level,Latitude:user.Latitude,Longitude:user.Longitude,gender:user.gender,lang:this.lang}
        ,options);

  }

  uploadImage(user_id,file: File) {
    let httpHeaders = new HttpHeaders({
      'enctype' : 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'Allow-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {
      headers: httpHeaders
    }; 
    const formData: FormData = new FormData();
    formData.append('profileImage', file, file.name);
    
    return this.http.post<any>(this.url+'editImge/'+user_id,formData,options);
    
  }


  get_Provider(id){

    let httpHeaders = new HttpHeaders({

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };

    return this.http.post<any>(this.url+'porvider_profile',{provider_id:id},options);

  }


  updateprovider(user_id,provider:updateUprovider){
    let httpHeaders = new HttpHeaders({

      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    provider.device_token = 'device_token';
    // provider.Latitude ='0.0';
    // provider.Longitude ='0.0';
    provider.role='provider';
    let categories = provider.categories.toString();
    return this.http.post<any>(this.url+'updateServiceProvider/'+user_id,
      {name:provider.Name,
        phone:provider.phoneNumber,
        email:provider.email,
        password:provider.password,
        nationality:provider.nationality_id,
        study_level:provider.study_level,
        Latitude:provider.Latitude,
        Longitude:provider.Longitude,
        gender:provider.gender,
        category:categories,
        delivery:provider.delivery,
        payment_method:provider.payment_method,
        last_works:provider.last_works,
        facebook:provider.facebook,
        bio:provider.bio,
        LinkedIn:provider.LinkedIn,
        Bank_name:provider.Bank_name,
        device_token:provider.device_token,
        bank_account:provider.bank_account




      }
      ,options);

  }

  get_provider_rates(user_id){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'get_provider_rates',{user_id:user_id},options);

  }


  comment_status(id,status){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'open_comment',{id:id,open_comment:status},options);

  }

  resset_password(email){

    
    return this.http.post<any>(this.url+'password-reset',{email:email});

  }


  password_resset(password,token){

    
    return this.http.post<any>(this.url+'reset-password/'+token,{password:password});

  }



  online(status){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.post<any>(this.url+'online',{online:status},options);

  }

    status_online(){

    let httpHeaders = new HttpHeaders({
      
      'Authorization' : 'Bearer ' + localStorage.getItem('token'),

    });
    let options = {

      headers: httpHeaders
    };
    
    return this.http.get<any>(this.url+'status',options);

  }


}
