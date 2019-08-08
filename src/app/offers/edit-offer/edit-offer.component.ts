import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router} from '@angular/router';
import { ProviderService } from '../../services/provider.service';
import {MakeOffer } from '../../models/make-offer';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-edit-offer',
	templateUrl: './edit-offer.component.html',
	styleUrls: ['./edit-offer.component.css']
})

export class EditOfferComponent implements OnInit {
	offer_id:string
formData = new FormData();
	MakeOfferValue = new MakeOffer();
	urls=[]
	offer_photes=[]
	new_id=[];
	mm:string [] = []
selectedFile:File
	constructor(private title: Title,private spinner: NgxSpinnerService,private router:Router,private route:ActivatedRoute,private provider:ProviderService,private translate: TranslateService) { }

	ngOnInit() {

		this.translate.get('faleh_services_edit_offer').subscribe(name=>{
       
      this.title.setTitle(name);
    });
		this.offer_id=this.route.snapshot.paramMap.get('id');
		this.provider.getOffer(this.offer_id).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['data']);
				this.MakeOfferValue = val['data']
				this.offer_photes = this.MakeOfferValue['offer_photo']
				var new_url=[]
				this.offer_photes.forEach(function (value) {
					// console.log(value.url_id);
					new_url.push(value.url_id);
				});
				this.new_id=new_url
				console.log(this.new_id)


				//this.order = val.service
			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});


	}

	deleteFileDetails(mess)
	{

		var new_url=[]
		this.offer_photes.splice(this.offer_photes.indexOf(mess), 1);
		this.offer_photes.forEach(function (value) {
			// console.log(value.url_id);
			new_url.push(value.url_id);
		});
		//  console.log(new_url)
		this.new_id=new_url
		//console.log(this.new_id)
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
       		console.log(this.urls)

                }

                reader.readAsDataURL(event.target.files[i]);
        }
       this.mm.push(event.target.files[0])
       		console.log(this.mm)


    }
      }
      deleteFileDetailsnew(mess)
	{
console.log(mess)
		var new_url
		this.urls.splice(mess,1);
		this.mm.splice(mess,1);
       console.log(this.urls)
       console.log(this.mm)
			this.mm.forEach(function (value) {
			// console.log(value.url_id);
			new_url=value;

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
  this.MakeOfferValue.url_id=this.new_id.toString();

 	this.provider.editoffer(this.offer_id,this.MakeOfferValue,this.formData).subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val);
				if (val.status==false) {
											this.spinner.hide();

					alert(this.translate.instant('can-no-edit-offer'))
				this.router.navigate(['get-offers/'+this.MakeOfferValue.service_id])

				}
				else{
						this.spinner.hide();

				alert(this.translate.instant('edit-offer-done'))
				this.router.navigate(['get-offers/'+this.MakeOfferValue.service_id])
				}
			

			},
			response => {
				console.log("POST call in error", response);
								this.spinner.hide();

			},
			() => {
				console.log("The POST observable is now completed.");
			});
  }


  public getExstendsion(image) {
        if (image.endsWith('jpg') || image.endsWith('jpeg')|| image.endsWith('png')|| image.endsWith('PNG')) {
            return 'jpg';
        }
        if (image.endsWith('pdf')|| image.endsWith('doc')|| image.endsWith('docx')|| image.endsWith('xls')|| image.endsWith('xlsx')) {
            return 'pdf';
        }
    }
  }






