import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-check-number',
  templateUrl: './check-number.component.html',
  styleUrls: ['./check-number.component.css']
})
export class CheckNumberComponent implements OnInit {
code:string
error:string
  constructor(private title: Title,private router:Router) { }

  ngOnInit() {
      this.title.setTitle(' فالح لخدمات الطالب و الاعمال - استرداد كلمه المرور');


  }

onchange(){

 
  var bytes  = CryptoJS.AES.decrypt(localStorage.getItem('code'), 'secret key 123');
   var originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));;
console.log(originalText)
if (this.code==originalText) {
        this.router.navigate(['password-resset']);

}
else
{
	        	this.error='عفوا الرقم الذى ادخلته غير صحيح'

}


  }


}
