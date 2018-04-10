import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/authService';
import { Router , NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  authCheck(e) {
  console.log(e);

  const user = e.target.elements[0].value;
  const password =  e.target.elements[1].value;
  if (user === 'admin' && password === 'admin') {
    this._AuthService.setUser();
    const navigationExtras: NavigationExtras = {
      queryParams: { 'user': user, 'session_id': btoa(this._AuthService.getUser())  }
    };
     this.router.navigate(['template'], navigationExtras);
    }
    e.preventDefault();
}
}
