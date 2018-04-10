import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import {Credit} from './credit.mock';

@Component({
  selector: 'app-credit-page',
  templateUrl: './credit-page.component.html',
  styleUrls: ['./credit-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreditPageComponent implements OnInit {

  creditValue: boolean = false;
   col: string;
   variable;
  data = Credit;
  constructor() { }
  ngOnInit() {

  }

  public onawsomecredit(i: number) {
    if ( i === 0 )    {
    this.variable = 'creditClass1';
    console.log('this.variable' + this.variable);
    }
    else if( i === 1)      {
      this.variable = 'creditClass2';
      console.log('this.variable2' + this.variable);
      }
    else {
      this.variable = 'creditClass3';
      console.log('this.variable3' + this.variable);

      }
  }

}

