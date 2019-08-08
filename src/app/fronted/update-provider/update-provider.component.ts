import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {updateUprovider } from '../../models/update-provider';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-update-provider',
	templateUrl: './update-provider.component.html',
	styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

	constructor(private title: Title,private auth:AuthService ,private router:Router,private route:ActivatedRoute ,private location: Location ,private translate: TranslateService) { }
	countries:any;
	studey_levels:any;
	provider_categories=[];
	providerValue = new updateUprovider();
	errors = [];
	lat :any;
	lng :any;
	location_lat:string;
	location_lng:string;
	id:string
	userValue={}
	error1:string
	  lang=localStorage.getItem('lang')
  dropdownSettings = {};
  selectedItems:any;

	ngOnInit() {

		   this.translate.get('faleh_services_edit').subscribe(name=>{
       
      this.title.setTitle(name);
    });
this.lang
		this.id=this.route.snapshot.paramMap.get('id');
		this.auth.getUser(this.id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['data']);
				var nn=val['data']['user']
				var mm=val['data']['provider']
				this.providerValue=Object.assign(nn,mm);
				this.providerValue
				console.log("22222")
				// set selected categories
				this.selectedItems = this.providerValue.categories

				this.lng=+this.providerValue.Longitude
				this.lat=+this.providerValue.Latitude


			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});

		// upload code goes here
		this.auth.getCountry().subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['data']);
				this.countries = val['data']
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
		////////////////////////////////////////////
		this.auth.getStudyLevelForProvider().subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['studyLevel']);
				this.studey_levels = val['studyLevel']
				// console.log

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
		///////////////////////////////////////////////////////
		this.auth.getcategories().subscribe(
			(val) => {

				
				this.provider_categories=val['categories']
				// console.log
				console.log("POST call successful value returned in body Test",  this.provider_categories);

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
if (this.lang=='ar') {
	 this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
         enableCheckAll:false,

      itemsShowLimit: 100,
      allowSearchFilter: true,
    
      	searchPlaceholderText:'بحث',
    
          };
}
else{
	 this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
         enableCheckAll:false,

      itemsShowLimit: 100,
      allowSearchFilter: true,
    
      	searchPlaceholderText:'search'
    
          };
}


	}

	onchange(){
		if (this.providerValue.password==this.providerValue.password_confirmation) {
		    this.error1=''

		this.providerValue.Longitude=this.lng
		this.providerValue.Latitude=this.lat
		this.providerValue.categories=[]
		for(let item of this.selectedItems) {
			this.providerValue.categories.push(item.id)
		}
		this.auth.updateprovider(this.id,this.providerValue).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				//this.countries=val['data']
				// console.log(val.message);
				if (val.status==true) {
				//	this.router.navigate(['provider-profile/'+this.id]);
 this.location.back();
					alert(this.translate.instant('updated-profile'))
				}
				else{

				}

			},
			response => {
				console.log("POST call in error", response.error.errors);

				let allErrors =(response.error.errors);
				for (var k in allErrors){
					if (typeof allErrors[k] !== 'function') {
						            this.errors=[]

						this.errors.push(allErrors[k])
					}
				}
			},
			() => {
				console.log("The POST observable is now completed.");
			});
	}
	else
	{
		    this.error1=''
      this.error1=this.translate.instant('confirm-pass')
	}
}

	placeMarker($event)
	{
		
		this.lat=  $event.coords.lat
		this.lng=  $event.coords.lng


	}


}


