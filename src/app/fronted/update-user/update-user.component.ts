import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {updateUser } from '../../models/update-user';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private title: Title,private auth:AuthService ,private router:Router,private route:ActivatedRoute,private translate: TranslateService) { }
  id:string
  user:{};
  countries:any;
  studey_levels:any
  lat :any;
  lng :any;
  error1:string
  countryValue = new updateUser('','','','','','','','','','','','');
    lang=localStorage.getItem('lang')

  errors = [];
  ngOnInit() {
      this.translate.get('faleh_services_edit').subscribe(name=>{
       
      this.title.setTitle(name);
    });
    this.lang

    this.id=this.route.snapshot.paramMap.get('id');
    this.auth.getUser(this.id).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['data']['user']);
        this.countryValue=val['data']['user']
        this.lat=+this.countryValue.Latitude
        this.lng=+this.countryValue.Longitude
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
    
  }


  onchange(){
    if (this.countryValue.password==this.countryValue.password_confirmation) {

this.error1=''
    this.countryValue.Latitude =this.lat
    this.countryValue.Longitude =this.lng
    this.auth.updateuser(this.id,this.countryValue).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val);
        //this.countries=val['data']
        // console.log(val.message);
        if (val.status==true) {
          this.router.navigate(['user-profile/'+this.id]);

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
     else{
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


