import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import {  DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-offers',
	templateUrl: './offers.component.html',
	styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
	service_id:string
	offers:any;
	error1:string
	private url:string
	pay:string
	first_name:string
	last_name:string
	iframeURL:any='';
	trustedDashboardUrl: SafeUrl
	constructor(private sanitizer:DomSanitizer,private title: Title,private router:Router,private route:ActivatedRoute,private user:UserService,private translate: TranslateService) {
		
		this.url="https://faleh.app/app/public/api/"

	}
	role=localStorage.getItem('role')

	ngOnInit() {

		this.translate.get('faleh_services_offer_details').subscribe(name=>{
			
			this.title.setTitle(name);
		});
		this.role
		this.service_id=this.route.snapshot.paramMap.get('id');
		this.user.getOffers(this.service_id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['offer']);
				this.offers = val['offer']
				//this.order = val.service
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}

	accpetOffer(offer_id,offer_value)
	{
		//console.log(this.pay)

		

		this.pay=this.url+'paytabs_payment?offer_id='+offer_id+'&&first_name='+this.first_name+'&&last_name='+this.last_name
		  //window.location.href=this.pay
		// var yourWindow = window.open();
		// yourWindow.opener = null;
		//yourWindow.location= this.pay
		// this.first_name=''
		// this.last_name=''
		this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pay);
		this.iframeURL = this.trustedDashboardUrl;
		//console.log(this.iframeURL)

/*
	    this.error1=''
		this.user.acceptOffer(offer_id,offer_value).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				if (val.status==false) {
					// code...
						alert(this.translate.instant('offer_value_not'));
		                window.location.reload()
				}
				else{
					alert(this.translate.instant('accpet-offer-done'));
			     	this.router.navigate(['/current-orders']);
				}
				
				

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
			*/
		}

		



		regusedOffer(offer_id)
		{


			this.user.regusedOffer(offer_id).subscribe(
				(val) => {
					console.log("POST call successful value returned in body",  val);
					
					alert(this.translate.instant('refused-offer-done'));
					//this.router.navigate(['order-details/'+this.service_id]);
					this.router.navigate(['/current-orders']);

				},
				response => {
					console.log("POST call in error", response);
				},
				() => {
					console.log("The POST observable is now completed.");
				});
		}


		public getExstendsion(image) {
			if (image.endsWith('jpg') || image.endsWith('jpeg')|| image.endsWith('png')|| image.endsWith('PNG')) {
				return 'jpg';
			}
			if (image.endsWith('pdf')|| image.endsWith('doc')|| image.endsWith('docx')|| image.endsWith('xls')|| image.endsWith('xlsx')) {
				return 'pdf';
			}
		}
		//public transform(url) {
		//	return this.sanitizer.bypassSecurityTrustResourceUrl('https://faleh.app/#/new-order/14');
		//}

		clear(){
			this.first_name=''
			this.last_name=''
		}


		source: string = '';

  onLoadFunc(myIframe) {
    this.source = myIframe.contentWindow.location.href;
  }
	}


