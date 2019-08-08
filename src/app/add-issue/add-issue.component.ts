import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-add-issue',
	templateUrl: './add-issue.component.html',
	styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
	issue:string
	services_id:string

	constructor(private router:Router,private route:ActivatedRoute,private user:UserService,private translate: TranslateService) { }

	ngOnInit() {
		this.services_id=this.route.snapshot.paramMap.get('id');

	}

	addissue()
	{

		this.user.add_issue(this.issue,this.services_id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				
				alert(this.translate.instant('upload-issue'));
				this.router.navigate(['order-details/'+this.services_id]);
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}

}
