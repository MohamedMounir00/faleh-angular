import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-about-faleh',
  templateUrl: './about-faleh.component.html',
  styleUrls: ['./about-faleh.component.css']
})
export class AboutFalehComponent implements OnInit {
about:string
  constructor(private share:ShareService) { }

  ngOnInit() {


      this.share.about_faleh().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val.data);
       this.about = val.data
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

  }


}
