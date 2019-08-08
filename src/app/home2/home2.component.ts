import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { ShareService } from '../services/share.service';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
categories:any;
slider:any;
links:any='';
home_index:any='';
  constructor(private title: Title, private translate: TranslateService,private router:Router,private cat:CategoriesService,private share:ShareService) {
    //location.reload();
   }

  ngOnInit() {

this.translate.get('faleh_services_main').subscribe(name=>{
       
      this.title.setTitle(name);
    });
  this.cat.getMainCategory().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['categories']);
        this.categories = val['categories']
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
    ////////////////////////////////////////////
      this.share.slider().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['data']);
        this.slider = val['data']
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

        ////////////////////////////////////////////
      this.share.links().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['data']);
        this.links = val['data']
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
      ////////////////////////////////////////////
      this.share.home_index().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val);
        this.home_index = val
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
    
  }

   login(){
    this.router.navigate(['login']);
    //window.location.reload();
  }
setrole(p){
    //  this.router.navigate(['login']);
      window.localStorage.setItem('setrole',p);

}


}
