import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   constructor(public router:Router,private translate: TranslateService, private app: AppComponent) {


   }

    username=localStorage.getItem('name')
  id=localStorage.getItem('id')
  role=localStorage.getItem('role')
  provider_id=localStorage.getItem('provider_id')
  photo=localStorage.getItem('photo')
  ngOnInit() {
    this.id
    this.username
    this.role
    this.provider_id
    this.photo


  }
  ngOnDestroy(){
    this.app.id = null;
    this.switchLanguage("ar")
    localStorage.clear();
    this.router.navigate(['']);
  }


 switchLanguage(language: string) {
    this.translate.use(language);
     localStorage.removeItem('lang');
     localStorage.setItem('lang',this.translate.currentLang);
                        window.location.reload()


     //console.log(this.translate.currentLang)

  }
}
