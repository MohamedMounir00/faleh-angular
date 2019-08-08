import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import {ActivatedRoute ,Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-get-user-conversations',
  templateUrl: './get-user-conversations.component.html',
  styleUrls: ['./get-user-conversations.component.css']
})
export class GetUserConversationsComponent implements OnInit {
allconversations:any=''
allconversations2:any=''
  constructor(private title: Title, private translate: TranslateService,private router:Router,private route:ActivatedRoute,private chat:ChatService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
 this.translate.get('faleh_services_conversations').subscribe(name=>{
       
      this.title.setTitle(name);
    });
  	  this.chat.getUserConversation().subscribe(
			(val) => {

				console.log("POST call successful value returned in body",  val);
			          this.allconversations= val['messages'];
			          this.allconversations2= val['status'];


			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			})
  }
  getMessage(id)
  {
  	this.router.navigate(['/get-messages',id])

  }

}
