import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   constructor(private title: Title,private router:Router,private translate: TranslateService) {
   // translate.setDefaultLang('ar');
  }
  username=localStorage.getItem('name')
  id=localStorage.getItem('id')
  role=localStorage.getItem('role')
  provider_id=localStorage.getItem('provider_id')
  ngOnInit() {
this.translate.get('faleh_services_main').subscribe(name=>{
       
      this.title.setTitle(name);
    });
    this.id
    this.username
    this.role
    this.provider_id


  }
  ngOnDestroy(){
   // localStorage.clear();
   // this.router.navigate(['']);
  //  window.location.reload();
  }


  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
