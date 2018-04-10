import { Component } from '@angular/core';


@Component({
  selector: 'header-component',
  templateUrl: './header.html'

})
export class headerComponent  {
showMenu: boolean = false;

  constructor() { }
toggleMenu() {
this.showMenu = !this.showMenu;
}
}
