import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  username=localStorage.getItem('name')
  id=localStorage.getItem('id')
  role=localStorage.getItem('role')
  provider_id=localStorage.getItem('provider_id')
  ngOnInit() {

    this.id
    this.username
    this.role
    this.provider_id


  }

}
