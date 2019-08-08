import { Component ,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faleh';
  username         = localStorage.getItem('name')
  id               = localStorage.getItem('id')
  role             = localStorage.getItem('role')
  provider_id      = localStorage.getItem('provider_id')
  lang             = localStorage.getItem('lang')
  encryptSecretKey:string
  constructor( public router:Router,private translate: TranslateService) {
    if (!this.lang){
      translate.setDefaultLang('ar');
    }else{
      translate.setDefaultLang(localStorage.getItem('lang'));
    }
   // console.log(this.translate.currentLang)


  }



  ngOnInit() {
    
  }

  ngOnDestroy(){
   // localStorage.clear();
   // this.router.navigate(['']);
   // window.location.reload();
  }


  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
