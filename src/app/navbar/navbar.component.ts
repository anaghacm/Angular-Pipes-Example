import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public title:string='Students List';
  public date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
