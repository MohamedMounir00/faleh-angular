import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-providers',
	templateUrl: './providers.component.html',
	styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
	service_id:string;
	providers:[]
payment_method:string
delivery:string
rate:number=1
  p: number = 1;
  shipment:string;
  	constructor(private title: Title,private route:ActivatedRoute,private user:UserService ,private router:Router,private translate: TranslateService,private spinner: NgxSpinnerService) { 

	}

	ngOnInit() {
		  this.translate.get('faleh_services_provider').subscribe(name=>{
       
      this.title.setTitle(name);
    });
		  	this.spinner.show();

		this.service_id=this.route.snapshot.paramMap.get('id');
		this.delivery=this.route.snapshot.paramMap.get('shipment');

		this.payment_method=this.route.snapshot.paramMap.get('payment_method');


		this.user.getProvider(this.service_id,this.delivery,this.payment_method).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				this.providers = val.Providers
						  	this.spinner.hide();

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}


	sendToProvider(provider_id)
	{


		this.user.sendProvider(provider_id,this.service_id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);

				//this.providers = val.Providers
				alert(this.translate.instant('invent-provider'))
				this.router.navigate(['order-details/'+this.service_id]);
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});

	}
Provider_filter(v){
			  	this.spinner.show();

	this.user.getProvider_filter(this.service_id,this.payment_method=v,this.delivery,this.rate).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				this.providers=[]
              this.providers=val.Providers
              		  	this.spinner.hide();

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});

	}

Provider_filter2(v){
			  	this.spinner.show();

	this.user.getProvider_filter(this.service_id,this.payment_method,this.delivery=v,this.rate).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);

				this.providers=[]
              this.providers=val.Providers
              		  	this.spinner.hide();

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});

	}
	Provider_filter3(v){
				  	this.spinner.show();


						this.providers=[]

	this.user.getProvider_filter(this.service_id,this.payment_method,this.delivery,this.rate=v).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
              this.providers=val.Providers
              		  	this.spinner.hide();

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});

	}
}
		
	


