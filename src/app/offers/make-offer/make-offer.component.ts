import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { ProviderService } from '../../services/provider.service';
import {MakeOffer } from '../../models/make-offer';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-make-offer',
  templateUrl: './make-offer.component.html',
  styleUrls: ['./make-offer.component.css']
})
export class MakeOfferComponent implements OnInit {

  constructor(private title: Title,private spinner: NgxSpinnerService,private router:Router,private route:ActivatedRoute,private provider:ProviderService,private translate: TranslateService) { }
service_id:string
	formData = new FormData();
	MakeOfferValue = new MakeOffer();
	urls=[]
mm:string [] = []
selectedFile:File
	errors=[]

  ngOnInit() {

    this.translate.get('faleh_services_make_offer').subscribe(name=>{
       
      this.title.setTitle(name);
    });
  			   this.service_id=this.route.snapshot.paramMap.get('id');
  
  }


	appendFileDetails (key, e) {
		console.log (e);

		console.log (key);
		var selectedFile = e.target.files[0];
		this.formData.append(key, selectedFile, selectedFile.name);
		console.log (this.formData.get(key));



	}


	 readUrl(key, event:any) {
      if (event.target.files && event.target.files[0]) {
      		this.selectedFile = event.target.files[0];
            var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                   this.urls.push(event.target.result); 

                }

                reader.readAsDataURL(event.target.files[i]);
        }
       this.mm.push(event.target.files[0])
       		console.log(this.mm)


    }
      }
      deleteFileDetailsnew(mess)
	{

		var new_url
		this.urls.splice(mess,1);
		this.mm.splice(mess,1);

			this.mm.forEach(function (value) {
			// console.log(value.url_id);
			new_url=value;
				console.log(value)

		});
		//  console.log(new_url)
	this.selectedFile =new_url

		console.log(this.mm)

		//  console.log(new_url)
		//console.log(this.new_id)
	}


  onchange(){
     	this.spinner.show();
     	this.formData= new FormData()

  	 for (var i = 0; i < this.mm.length; i++) { 
  				this.formData.append('offer_file_url[]', this.mm[i])
    }

  				//this.formData.append('offer_file_url[]', this.selectedFile, this.selectedFile.name)

  	this.MakeOfferValue.service_id=this.service_id
 this.provider.nakeOffer(this.service_id,this.MakeOfferValue,this.formData).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				     	this.spinner.hide();

				alert(this.translate.instant('maked-offer'))
					this.router.navigate(['order-details/'+this.service_id]);


			},
			response => {
				console.log("POST call in error", response);
				     	this.spinner.hide();

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


  public getExstendsion(image) {
    if (image.endsWith('jpg') || image.endsWith('jpeg')) {
      return 'jpg';
    }
    if (image.endsWith('pdf')) {
      return 'pdf';
    }
  }
}
