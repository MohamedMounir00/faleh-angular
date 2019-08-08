import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { UserService } from '../services/user.service';
import {orderdetails } from '../models/orderdetails';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
@Component({
	selector: 'app-orderdetails',
	templateUrl: './orderdetails.component.html',
	styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
	id:string;
	answer:any=''
	order:any=''
	//orderValue = new orderdetails(this.id,'123','1r')

	constructor(private title: Title, private translate: TranslateService,private router:Router,private route:ActivatedRoute,private user:UserService, private domSanitizer: DomSanitizer) { 
		

	}
	role=localStorage.getItem('role')

	ngOnInit() {

			  this.translate.get('faleh_services_order_details').subscribe(name=>{
       
      this.title.setTitle(name);
    });
		this.role
		this.id=this.route.snapshot.paramMap.get('id');
		this.user.orderDetalis(this.id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				this.answer = val.service.answers
				this.order = val.service
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

}
