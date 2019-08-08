import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
links:any=''
  constructor(private share:ShareService) { }

  ngOnInit() {

  	      ////////////////////////////////////////////
      this.share.links().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val['data']);
        this.links = val['data']
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }

}
