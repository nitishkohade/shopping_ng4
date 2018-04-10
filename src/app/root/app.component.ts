import { Component , ViewEncapsulation} from '@angular/core';
import {headerComponent} from '../components/header/header';
import {footerComponent} from '../components/footer/footer';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../core/services/authService';


@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AuthService],
    encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'app';


    constructor( public router: Router, public authService: AuthService) {
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });

        this.authService.authRequest();
     }

}
