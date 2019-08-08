import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	id:string
	user1:any='';
	user2:any=''
	country:any=''
		  lang=localStorage.getItem('lang')

	constructor(private title: Title, private translate: TranslateService,private auth:AuthService ,private router:Router,private route:ActivatedRoute,
		private spinner: NgxSpinnerService) { }

	ngOnInit() :void {

		  this.translate.get('faleh_services_user_profile').subscribe(name=>{
       
      this.title.setTitle(name);
    });
		this.lang
			this.spinner.show();

		this.id=this.route.snapshot.paramMap.get('id');
		this.auth.getUser(this.id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['data']['user']);
				this.user1=val['data']['user']
				       this.country= this.user1.country

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
		

		this.auth.getProvider(this.id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['provider']);
				this.user2=val['provider']
               window.localStorage.setItem('photo',this.user2.user_photo);
	        this.spinner.hide();

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});


	}

	selectedFile: File;

	onFileChanged(event) {
		this.selectedFile = event.target.files[0];
		this.auth.uploadImage(this.id,this.selectedFile).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				window.location.reload();

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			})  }




	}