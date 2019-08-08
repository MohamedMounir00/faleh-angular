import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  title = 'faleh';
  constructor(private router:Router,private translate: TranslateService) {
    translate.setDefaultLang('ar');
  }
  username=localStorage.getItem('name')
  id=localStorage.getItem('id')
  role=localStorage.getItem('role')
  provider_id=localStorage.getItem('provider_id')
  ngOnInit() {

    this.id
    this.username
    this.role
    this.provider_id


  }
  ngOnDestroy(){
    localStorage.clear();
    this.router.navigate(['']);
    window.location.reload();
  }


  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
