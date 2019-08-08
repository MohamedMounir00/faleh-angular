import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {DomSanitizer} from '@angular/platform-browser';
import {NgxSpinnerService} from 'ngx-spinner';
import {TranslateService} from '@ngx-translate/core';

import { Title, Meta} from '@angular/platform-browser';

@Component({
    selector: 'app-currentorders',
    templateUrl: './currentorders.component.html',
    styleUrls: ['./currentorders.component.css']
})


export class CurrentordersComponent implements OnInit {

    constructor(public meta: Meta,private title: Title,private user: UserService, private domSanitizer: DomSanitizer,
     private spinner: NgxSpinnerService, private translate: TranslateService) {

    }

    value = 2 //addition of .5
    starList: string[] = [];
    offset: number = 0
    n: number
    orders = [];
    neworders = []
    new = []
    answer: any
    order: any = ''
    role = localStorage.getItem('role')
//lang= localStorage.getItem('role')
    ngOnInit(){

    this.spinner.show();
     this.translate.get('faleh_services_current').subscribe(name=>{
       
      this.title.setTitle(name);
    });

         ////////////////////////////////////////////
        this.user.currentOrders(status, this.offset).subscribe(
            (val) => {
                console.log("POST call successful value returned in body", val['services']);
                this.orders = this.new = val['services']
                                this.spinner.hide();

            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });


        let i = 1;
        for (i = 1; i <= 5; i++) {
            if (i <= this.value) {
                this.starList.push("fas fa-star");
            } else if (i <= this.value + 0.5) {
                this.starList.push("fas fa-star-half");
            } else {
                this.starList.push("far fa-star");
            }
        }

    }

    more(number) {
        this.offset += number

        this.user.currentOrders(status, this.offset).subscribe(
            (val) => {
                console.log("POST call successful value returned in body", val['services']);


                this.neworders = val['services']
                if (this.neworders.length != 0) {
                    // code...
                    this.orders = this.orders.concat(this.neworders);
                }


                console.log(val)
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });

    }

    details(id) {
        this.role
        this.spinner.show();

        this.user.orderDetalis(id).subscribe(
            (val) => {
                console.log("POST call successful value returned in body", val);
                this.answer = val.service.answers
                this.order = val.service
                this.spinner.hide();

            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
    }

    sanitize(url: any) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);

    }

    public getExstendsion(image) {
        if (image.endsWith('jpg') || image.endsWith('jpeg')|| image.endsWith('png')|| image.endsWith('PNG')) {
            return 'jpg';
        }
        if (image.endsWith('pdf')|| image.endsWith('doc')|| image.endsWith('docx')|| image.endsWith('xls')|| image.endsWith('xlsx')) {
            return 'pdf';
        }
    }
    placeMarker($event) {

        $event.coords.lat
        $event.coords.lng


    }
}
