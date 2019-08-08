import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as CryptoJS from 'crypto-js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resset-password',
  templateUrl: './resset-password.component.html',
  styleUrls: ['./resset-password.component.css']
})
export class RessetPasswordComponent implements OnInit {

  errors = [];
  error1:string;
email:string

  constructor(private title: Title,private auth:AuthService ,private router:Router) { }
  ngOnInit() {
      this.title.setTitle(' فالح لخدمات الطالب و الاعمال -  اعاده تعين كلمه المرور');

  }

onchange(){
	console.log(this.email)





    this.auth.resset_password(this.email).subscribe(
      (val) => {
      //  console.log("POST call successful value returned in body",val);
    if (val.error) {
        	this.error1=val.error
        }
        else{
          var code : String = val.code+''
          console.log(code)
          localStorage.setItem('token',val.token);
         // localStorage.setItem('code',);
       window.localStorage.setItem('code', CryptoJS.AES.encrypt(code, 'secret key 123').toString());          

       // window.location.reload();
        this.router.navigate(['check']);


      
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

