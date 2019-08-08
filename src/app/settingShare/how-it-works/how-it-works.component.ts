import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {
how_works:string
  constructor(private share:ShareService) { }

  ngOnInit() {


      this.share.how_it_works().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val.data);
       this.how_works = val.data
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

  }
 

}
