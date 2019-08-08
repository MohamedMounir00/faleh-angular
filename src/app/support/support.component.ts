import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

   constructor(private title: Title, private translate: TranslateService,private user:UserService) { }
data:any
  ngOnInit() {
  	 this.translate.get('faleh_services_tech').subscribe(name=>{
       
      this.title.setTitle(name);
    });
  	this.user.spoort().subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['data']);
			this.data= val['data'];
					
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			})
  }
}
