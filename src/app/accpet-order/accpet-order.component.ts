import {  Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-accpet-order',
	templateUrl: './accpet-order.component.html',
	styleUrls: ['./accpet-order.component.css']
})
export class AccpetOrderComponent implements OnInit {
	services_id:string;
	stars:string
	comment:string
	  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
	constructor(private title: Title,private router:Router,private route:ActivatedRoute,private user:UserService,private translate: TranslateService) { }
  inputName: string;

	ngOnInit() {
		 this.translate.get('faleh_services_accept_order').subscribe(name=>{
       
      this.title.setTitle(name);
    });
		    this.stars = this.itemId + '_rating';


		this.services_id=this.route.snapshot.paramMap.get('id');

	}

	 onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
	onchange(){

		console.log(this.rating,this.comment)

		this.user.acceptOrder(this.rating,this.comment,this.services_id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				
				alert(this.translate.instant('accpet-order-alert'));
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
