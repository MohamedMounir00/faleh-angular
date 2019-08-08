import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
@Component({
	selector: 'app-recipts',
	templateUrl: './recipts.component.html',
	styleUrls: ['./recipts.component.css']
})
export class ReciptsComponent implements OnInit {
	services_id:string
	recipts:any
	url:any
	constructor(private title: Title, private translate: TranslateService,private router:Router,private route:ActivatedRoute,private user:UserService) { }

	ngOnInit() {
  this.translate.get('faleh_services_recipts').subscribe(name=>{
       
      this.title.setTitle(name);
    });
		this.services_id=this.route.snapshot.paramMap.get('id');
		this.user.recipts(this.services_id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				this.recipts=val
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}

	Invoice()
	{


		this.user.Invoice(this.services_id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				this.url= val
				  // window.open(this.url.url, "_blank");
				  var yourWindow = window.open();
          yourWindow.opener = null;
            yourWindow.location = this.url.url;

           //window.location.href=this.url.url;
 			//	console.log(this.url.url)
				
				
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}


}


