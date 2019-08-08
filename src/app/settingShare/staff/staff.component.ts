import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
staff:string
  constructor(private share:ShareService) { }

  ngOnInit() {

      this.share.staff().subscribe(
      (val) => {
        console.log("POST call successful value returned in body",  val.data);
       this.staff = val.data
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

  }

}
