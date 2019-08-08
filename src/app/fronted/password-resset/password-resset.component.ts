import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-password-resset',
  templateUrl: './password-resset.component.html',
  styleUrls: ['./password-resset.component.css']
})
export class PasswordRessetComponent implements OnInit {

  constructor(private title: Title,private auth:AuthService ,private router:Router) { }
password:string
token=localStorage.getItem('token')
  ngOnInit() {
      this.title.setTitle(' فالح لخدمات الطالب و الاعمال -  اعاده تعين كلمه المرور');

  }



  onchange(){





    this.auth.password_resset(this.password,this.token).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",val);
    
        alert('تعم تغير كلمه المرور بنجاح')
            localStorage.clear();

       // window.location.reload();
        this.router.navigate(['login']);


      
      

        
      },
      response => {
        console.log("POST call in error", response.error.errors);

      
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }

}
