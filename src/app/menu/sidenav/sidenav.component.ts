import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 240;

  constructor() { }

  ngOnInit() {
  }

  onToolbarMenuToggle() {
   console.log('On toolbar toggled', this.isMenuOpen);
   this.isMenuOpen = !this.isMenuOpen;

   if(!this.isMenuOpen) {
     this.contentMargin = 70;
   } else {
     this.contentMargin = 240;
   }
  }

}
