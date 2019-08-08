import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {Location} from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent implements OnInit {
 isCollapsed = true;
  constructor(private title: Title,private auth:AuthService ,private router:Router,
    private route:ActivatedRoute,private _location: Location,
    private translate: TranslateService,private spinner: NgxSpinnerService) { }
  id:string
  provider_id:string
  user1:any='';
  user2:any=''
  role=localStorage.getItem('role')
  comment:any=''
  open:string
  lng:any
  lat:any
  ss:any=''
  country:any=''
  categories:any=''
      lang=localStorage.getItem('lang')

  ngOnInit() {
      this.translate.get('faleh_services_provider_profile').subscribe(name=>{
       
      this.title.setTitle(name);
    });
  this.spinner.show();
  this.lang


  	this.id=this.route.snapshot.paramMap.get('id');
    this.provider_id=this.route.snapshot.paramMap.get('provider_id');
    this.auth.getUser(this.id).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['data']);
        this.user1=val['data']['user']
        var nn=val['data']
        this.categories=nn.provider.categories
        console.log(this.categories)
       this.country= this.user1.country
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
    

    this.auth.get_Provider(this.provider_id).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['provider']);
        this.user2=val['provider']
               window.localStorage.setItem('photo',this.user2.user_photo);
  this.spinner.hide();

      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });


    this.auth.get_provider_rates(this.id).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['rate']);
        this.comment=val['rate']
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

      this.auth.status_online().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['status']);
        this.ss=val
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

  }

  selectedFile: File;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.auth.uploadImage(this.id,this.selectedFile).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val);
        window.location.reload();

      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      })  }

    change_status(id,e){
      console.log(e)
      this.auth.comment_status(id,e).subscribe(
        (val) => {
          console.log("POST call successful value returned in body",  val['data']);
          alert(val['data'])

        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        })  }


      back(){
    this._location.back();

      }





      online(e)
      {
         this.auth.online(e).subscribe(
        (val) => {
      

        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        })  }

      }

  

