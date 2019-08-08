import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { ChatService } from '../../services/chat.service';
import {ActivatedRoute ,Router} from '@angular/router';
import {timer} from 'rxjs';
import {Location} from '@angular/common';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
@Component({
	selector: 'app-get-messages',
	templateUrl: './get-messages.component.html',
	styleUrls: ['./get-messages.component.css']
})
export class GetMessagesComponent implements OnInit {
	receiver_id:string

	allmessages:any='' 
	message:string=''
	intervalHolder:any
	receiver_name:string
	private my_timer;    
	lang = localStorage.getItem('lang')

	constructor(private title: Title, private translate: TranslateService,private _location: Location,private router:Router,private route:ActivatedRoute,private chat:ChatService,private _changeDetectorRef: ChangeDetectorRef) {

	}
	
	ngOnInit()  {
		this.translate.get('faleh_services_conversations').subscribe(name=>{

			this.title.setTitle(name);
		});  
		this.lang
		this.receiver_id=this.route.snapshot.paramMap.get('id');

		this.chat.getMessage(this.receiver_id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				this.allmessages= val['messages'];
				this.receiver_name=val.receiver
				//alert('لقد قمت برفض الخدمه');
				//this.router.navigate(['order-details/'+this.services_id]);
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
		console.log(this.router.url)
		// code...
		this.my_timer = timer(2000,2000); 


		this.my_timer.subscribe(t=> {  


			this.chat.getMessage(this.receiver_id).subscribe(
				(val) => {
					console.log("POST call successful value returned in body",  val);
					this.allmessages= val['messages'];
					this.receiver_name=val.receiver
					//alert('لقد قمت برفض الخدمه');
					//this.router.navigate(['order-details/'+this.services_id]);
				},
				response => {
					console.log("POST call in error", response);
				},
				() => {
					console.log("The POST observable is now completed.");
				});  
		});










		//console.log(this.stars,this.comment)



		// this.intervalHolder = setInterval(() => {
			// Let's refresh the list.
			//this._changeDetectorRef.markForCheck();
			//}, 1); // 1 minute


		}
		ngOnDestroy() {
			location.reload()
		}

		getFromChiled(event){
			this.message=event
			console.log(event)

			if (this.allmessages=='not allowed') {
				location.reload(true)
				///console.log(true)
			}
			else{
				this.allmessages.push({text:event})

			}
			// this.intervalHolder = setInterval(() => {
				// Let's refresh the list.
				//  this._changeDetectorRef.markForCheck();
				// }, 1); // 1 min
				//this.allmessages.push({text:event})

			}
			back(){
				this._location.back();

			}
		}




