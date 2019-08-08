import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.css']
})
export class SendMessagesComponent implements OnInit {
receiver_id:string
text:string
@Output() message=new EventEmitter<string>();

  constructor(private router:Router,private route:ActivatedRoute,private chat:ChatService) { }

  ngOnInit() {

  	  	  		this.receiver_id=this.route.snapshot.paramMap.get('id');
  	  	 

  }


sendMessage(){

	   this.chat.sendMessage(this.receiver_id,this.text).subscribe(
			(val) => {
				console.	log("POST call successful value returned in body",  val);
					console.log(this.receiver_id,this.text)
this.message.emit(this.text)
               this.text=''
					//alert('تم قبول العرض بنجاح');
				//this.router.navigate(['order-details/'+this.services_id]);
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
}

}
