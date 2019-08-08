import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {SaveNewProvider } from '../../models/save-new-provider';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-provider-registration',
  templateUrl: './provider-registration.component.html',
  styleUrls: ['./provider-registration.component.css']
})
export class ProviderRegistrationComponent implements OnInit {
  countries:any;
  studey_levels:any;
  provider_categories=[];
  providerValue = new SaveNewProvider();
  errors = [];
  lat :any;
  lng :any;
  location_lat:string;
  location_lng:string;
  error1:string
  dropdownSettings = {};
  constructor(private title: Title,
private auth:AuthService ,private router:Router) { }

  ngOnInit() {
          this.title.setTitle('فالح لخدمات الطالب و الاعمال - تسجيل مقدم خدمه');

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
        console.log("POST call successful value returned in body",  val['categories']);
        this.provider_categories = val['categories']
        // console.log

      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

    if (navigator)
    {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        // this.location=this.lat+','+this.lng
      });
    }
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

  onchange(){
if (this.providerValue.password==this.providerValue.password_confirmation) {

this.error1=''

    this.providerValue.Latitude=this.lat
    this.providerValue.Longitude=this.lng

    console.log(this.providerValue);

    this.auth.saveProvider(this.providerValue).subscribe(

      (val) => {
        console.log("POST call successful value returned in body",  val);
        this.countries=val['data']
        if (val.status==true) {
          this.router.navigate(['login']);

          alert(val.message)
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
  else{
     this.error1=''
      this.error1='كلمه المرور غير متطابقه'
  }
}
  placeMarker($event)
  {
    
    this.lat=  $event.coords.lat
    this.lng=  $event.coords.lng


  }

    onItemSelect(item: any) {
    this.providerValue.categories.push(item.id)
 console.log(this.providerValue.categories.push(item.id))
  }


}
