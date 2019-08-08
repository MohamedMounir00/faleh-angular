import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css']
})
export class TermsOfServiceComponent implements OnInit {

  constructor(private share:ShareService) { }
service:string
  ngOnInit() {



      this.share.terms_of_service().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val.data);
       this.service = val.data
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

  }


}
