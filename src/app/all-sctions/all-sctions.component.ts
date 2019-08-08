import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-all-sctions',
  templateUrl: './all-sctions.component.html',
  styleUrls: ['./all-sctions.component.css']
})
export class AllSctionsComponent implements OnInit {
categories:any;
	sub_categories:any
  constructor(private title: Title, private translate: TranslateService,private cat:CategoriesService
		 ,private router:Router ) { }

  ngOnInit() {
	 this.translate.get('faleh_services_main_sections').subscribe(name=>{
       
      this.title.setTitle(name);
    })

		this.cat.getMainCategory().subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['categories']);
				this.categories = val['categories']
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
		////////////////////////////////////////////

  }
changeToSub(id)
{
					this.router.navigate(['/sub-sctions/'+id])

}
}
