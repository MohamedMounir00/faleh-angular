import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {

  constructor(private router:Router,private share:ShareService) { }
setrole=localStorage.getItem('setrole')
links:any='';
home_index:any='';
  ngOnInit() {
  	this.setrole



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
      ////////////////////////////////////////////
      this.share.home_index().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val);
        this.home_index = val
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }

}
