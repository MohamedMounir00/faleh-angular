import { Component, OnInit } from '@angular/core';
import {Category } from '../models/main-category';
import {Router, ActivatedRoute} from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-sub-sctions',
  templateUrl: './sub-sctions.component.html',
  styleUrls: ['./sub-sctions.component.css']
})
export class SubSctionsComponent implements OnInit {
	CategoryValue = new Category()
	sub_categories:any
main_id:string
  constructor(private title: Title, private translate: TranslateService,private cat:CategoriesService
		 ,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
 this.translate.get('faleh_services_sub_sections').subscribe(name=>{
       
      this.title.setTitle(name);
    });
		this.main_id=this.route.snapshot.paramMap.get('id');
this.CategoryValue.main_id=this.main_id

  		this.cat.getSubCategory(this.CategoryValue).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['categories']);
				this.sub_categories = val['categories']
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
  }
changeToNewOrder(id)
{
					this.router.navigate(['/new-order/'+id])

}
}
