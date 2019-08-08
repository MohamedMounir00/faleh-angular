import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-oldorders',
	templateUrl: './oldorders.component.html',
	styleUrls: ['./oldorders.component.css']
})
export class OldordersComponent implements OnInit {

	constructor(private title: Title, private translate: TranslateService,private user:UserService, private domSanitizer: DomSanitizer,private spinner: NgxSpinnerService) { }
	offset:number=0

	orders=[];
	new=[];
	neworders=[]
	answer:any
	order:any=''
	role=localStorage.getItem('role')
	ngOnInit() {
		this.translate.get('faleh_services_old').subscribe(name=>{
			
			this.title.setTitle(name);
		});
		this.spinner.show();

		////////////////////////////////////////////
		this.user.oldOrders(status,this.offset).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['services']);
				this.orders =this.new  = val['services']
				this.spinner.hide();

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}


	more(number) {
		this.offset+=number

		this.user.oldOrders(status,this.offset).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['services']);
				this.neworders = val['services']
				if (this.neworders.length!=0) {
					// code...
					this.orders = this.orders.concat(this.neworders);
				}			},
				response => {
					console.log("POST call in error", response);
				},
				() => {
					console.log("The POST observable is now completed.");
				});

	}

	details(id)
	{
		this.role
		this.spinner.show();

		this.user.orderDetalis(id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				this.answer = val.service.answers
				this.order = val.service
				this.spinner.hide();

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}

	sanitize(url:any){
		return this.domSanitizer.bypassSecurityTrustUrl(url);

	}

	public getExstendsion(image) {
		if (image.endsWith('jpg') || image.endsWith('jpeg')|| image.endsWith('png')|| image.endsWith('PNG')) {
			return 'jpg';
		}
		if (image.endsWith('pdf')|| image.endsWith('doc')|| image.endsWith('docx')|| image.endsWith('xls')|| image.endsWith('xlsx')) {
			return 'pdf';
		}
	}
	placeMarker($event)
	{
		
		$event.coords.lat
		$event.coords.lng


	}

}
