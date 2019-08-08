import { Component, OnInit } from '@angular/core';
import {SaveNewUser } from '../../models/save-new-user';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
import { AppComponent } from '../../app.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginValue = new SaveNewUser();
  errors = [];
  error1:string;
  encryptSecretKey:string
  public token: string;
setrole=localStorage.getItem('setrole')

  constructor(private title: Title,private auth:AuthService ,private router:Router,private app: AppComponent) { }

  ngOnInit() {
          this.title.setTitle('فالح لخدمات الطالب و الاعمال - تسجيل الدخول');

this.setrole
  }


  onchange(){
    this.auth.login(this.loginValue).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",val['user']);
        if (val.status=='error') {
        	this.error1=val.message
        }
        else{
    this.app.id = val.user.id;

          window.localStorage.setItem('token',val.user.token);
          window.localStorage.setItem('id',val.user.id);
          window.localStorage.setItem('provider_id',val.user.service_profile_id);
          window.localStorage.setItem('name',val.user.Name);
          window.localStorage.setItem('photo',val.user.user_photo);

          window.localStorage.setItem('role',val.user.role);
          window.localStorage.setItem('lang','ar');
          if (val.user.role=='client') {
                 this.router.navigate(['all-sections']);

          }
          else{
                     this.router.navigate(['']);

          }

          //timer(100).pipe(
           // take(1)).subscribe(x=>{
              // do here whatever you want to do
              
           //   window.location.reload()
            //})
            
          }
          

          
        },
        response => {
          console.log("POST call in error", response.error.errors);

          let allErrors =(response.error.errors);
          for (var k in allErrors){
            if (typeof allErrors[k] !== 'function') {
              this.errors.push(allErrors[k])
            }
          }
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }



}
