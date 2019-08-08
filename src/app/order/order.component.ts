import { Component, OnInit } from '@angular/core';
import {NewOrder } from '../models/new-order';
import {Category } from '../models/main-category';
import {Router,ActivatedRoute} from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { UserService } from '../services/user.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from 
'@angular/forms';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
	public token: string;

	categories:any;
	sub_categories:any
	OrderValue = new NewOrder()
	CategoryValue = new Category()
	questions:any
	formData = new FormData();
	errors=[]
	lat :any;
	lng :any;
	lat_new :string;
	lng_new :string;
	location:string='';
	urls=[];
	url_sounds=[];
	target:EventTarget;
	mm:string [] = []
	fileNames:string [] = []
	ss:string [] = []

	selectedFile:File
	key_file:string
	key_sounde:string
	private record;
	//Will use this flag for detect recording
	private recording = false;
	//Url of Blob
	sound_key:string;
	url:string;
	cat_id:string
	private error;
	error1:string;

	locationController = new FormControl('', [
		// Validators.required,

		]);
	constructor(private title: Title,private cat:CategoriesService
		,private user:UserService,private router:Router 
		, private domSanitizer: DomSanitizer
		,private spinner: NgxSpinnerService,private route:ActivatedRoute,private translate: TranslateService) { }

	ngOnInit() :void{
		this.translate.get('faleh_services_new_order').subscribe(name=>{

			this.title.setTitle(name);
		});
		this.cat_id=this.route.snapshot.paramMap.get('id');

		////////////////////////////////////////////
		this.cat.getQuestion().subscribe(
			(val) => {
				console.log("POST call successful value returned in body",  val['question']);
				this.questions = val['question']

			},
			response => {
				console.log("POST call in error", response);
			},
			() => {
				console.log("The POST observable is now completed.");
			});
            /*
		this.user.getLocation().subscribe(data=>{
			this.lat=data.latitude
			this.lng=data.longitude
			//console.log(this.lat+','+this.lng)
		})

		*/

		if (navigator)
		{
			navigator.geolocation.getCurrentPosition( pos => {
				this.lng = +pos.coords.longitude;
				this.lat = +pos.coords.latitude;
				this.location=this.lat+','+this.lng
			});
		}
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
			//this.selectedFile = event.target.files[0];

			var filesAmount = event.target.files.length;
			for (let i = 0; i < filesAmount; i++) {
				var reader = new FileReader();

				reader.onload = (event:any) => {
					this.urls.push(event.target.result); 
				}

				reader.readAsDataURL(event.target.files[i]);
			}
			this.fileNames.push(event.target.files[0].name)
			this.mm.push(event.target.files[0])
			    event.target.value = '';
			//console.log(this.mm)
			this.key_file=key

		}
	}
	deleteFileDetails(mess)
	{

		
		this.urls.splice(mess, 1);
		this.mm.splice(mess, 1);
		this.fileNames.splice(mess, 1);




		//console.log(this.mm)

		//  console.log(new_url)
		//console.log(this.new_id)
	}


/*
	readsound(key, event:any) {
		if (event.target.files && event.target.files[0]) {
			var selectedFile = event.target.files[0];
			this.formData.append(key, selectedFile, selectedFile.name)
			var filesAmount = event.target.files.length;
			for (let i = 0; i < filesAmount; i++) {
				var reader = new FileReader();

				reader.onload = (event:any) => {
					console.log(event.target.result);
					this.url_sounds.push(event.target.result); 
				}

				reader.readAsDataURL(event.target.files[i]);
			}
		}
	}
	*/
	///////////////////////////////////////////////sound
	sanitize(url:any){
		return this.domSanitizer.bypassSecurityTrustUrl(url);

	}
    /**
     * Start recording.
     */
     initiateRecording() {
     	
     	this.recording = true;
     	let mediaConstraints = {
     		video: false,
     		audio: true
     	};
     	navigator.mediaDevices
     	.getUserMedia(mediaConstraints)
     	.then(this.successCallback.bind(this), this.errorCallback.bind(this));
     }
    /**
     * Will be called automatically.
     */
     successCallback(stream) {
     	var options = {
     		mimeType: "audio/wav",
     		numberOfAudioChannels: 1
     	};
     	//Start Actuall Recording
     	var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
     	this.record = new StereoAudioRecorder(stream, options);
     	this.record.record();
     	console.log(this.record)

     }
    /**
     * Stop recording.
     */
     stopRecording(key) {
     	this.recording = false;
     	this.record.stop(this.processRecording.bind(this));
     	this.key_sounde=key
     }
    /**
     * processRecording Do what ever you want with blob
     * @param  {any} blob Blog
     */
     processRecording(blob) {
     	this.url = URL.createObjectURL(blob);
     	//console.log(this.url)
     	this.url_sounds.push(this.url)
     	this.ss.push(blob)
     	//	this.formData.append(this.key_file,blob)

     	//console.log(this.mm)

     }
    /**
     * Process Error.
     */
     errorCallback(error) {
     	this.error = 'Can not play audio in your browser';
     }

     deleteSoundDetails(mess)
     {

     	
     	this.url_sounds.splice(mess, 1);
     	this.ss.splice(mess, 1);


     }

     ///////////////////////////////////////////////////////////////////////////////////////////

     createOrder(){
     	if (this.location) {
     		// code...
     		this.formData= new FormData()
     		this.OrderValue.cat_id=this.cat_id
     		for (var i = 0; i < this.mm.length; i++) { 
     			this.formData.append(this.key_file, this.mm[i])
     		}
     		for (var i = 0; i < this.ss.length; i++) { 
     			this.formData.append(this.key_sounde, this.ss[i],'.wav')
     			console.log(this.ss[i])
     		}
     		this.locationController.markAsDirty()	
     		this.OrderValue.q_34_location=this.location

     		this.spinner.show();
     		this.user.createOrder(this.formData, this.OrderValue).subscribe(
     			(val) => {
     				console.log("POST call successful value returned in body",  val);
     				this.spinner.hide();
     				alert(this.translate.instant('add-order'));

     				this.router.navigate(['/current-orders']);

     				// this.sub_categories = val['categories']
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
     	else{
     		this.error1=''
     		this.error1=this.translate.instant('location-required')
     	}
     }



     placeMarker($event)
     {
     	
     	this.location=	$event.coords.lat+','+$event.coords.lng
     	console.log(this.location)	

     	this.lat =$event.coords.lat;
     	this.lng =$event.coords.lng;

     }
 }
