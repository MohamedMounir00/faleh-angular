import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-refused-order',
	templateUrl: './refused-order.component.html',
	styleUrls: ['./refused-order.component.css']
})
export class RefusedOrderComponent implements OnInit {
	services_id:string
	refused_reason:string
	constructor(private title: Title,private router:Router,private route:ActivatedRoute,private user:UserService,private translate: TranslateService) { }

	ngOnInit() {
		  this.translate.get('faleh_services_refused_order').subscribe(name=>{
       
      this.title.setTitle(name);
    });

		this.services_id=this.route.snapshot.paramMap.get('id');

	}
	refusedOrder(){
		//console.log(this.stars,this.comment)

		this.user.refusedOrder(this.refused_reason,this.services_id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				
				alert(this.translate.instant('refused-order-alert'));
				//this.router.navigate(['order-details/'+this.services_id]);
					this.router.navigate(['/old-orders']);

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}
}
