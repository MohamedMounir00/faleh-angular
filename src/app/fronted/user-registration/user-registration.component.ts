import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {SaveNewUser } from '../../models/save-new-user';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  countries:any;
  studey_levels:any;
  countryValue = new SaveNewUser();
  errors = [];
  lng:any
  lat:any
    error1:string;

  constructor(private title: Title, private auth:AuthService ,private router:Router) { }

  ngOnInit() {
          this.title.setTitle('فالح لخدمات الطالب و الاعمال - تسجيل طالب خدمه ');



    // upload code goes here
    this.auth.getCountry().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['data']);
        this.countries=val['data']
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
    this.auth.getStudyLevelForUser().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['studyLevel']);
        this.studey_levels=val['studyLevel']
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

  }

  onchange(){
if (this.countryValue.password==this.countryValue.password_confirmation) {

this.error1=''


          this.countryValue.Latitude=this.lat
    this.countryValue.Longitude= this.lng
    this.auth.saveUser(this.countryValue).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val);
        //this.countries=val['data']
         console.log(val['status']);
        if (val.status==true) {
      this.router.navigate(['login']);

        alert(val.message)
        }
        else{

        }

      },
      response => {
        console.log("POST call in error", response.error);

        let allErrors =(response.error.errors);
        for (var k in allErrors){
          if (typeof allErrors[k] !== 'function') {
            this.error1=''
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
}
