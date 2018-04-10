import { Component, OnInit , Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {
@Input() price: any;
@Input() spinThePrice: any;
@Input() symbolClass: any;
@Input() dollarClass: any;
@Input() decimalClass: any;
@Input() pennyClass: any;
@Input() decimalSeparator: any;
@Input() thousandSeparator: any;
@Input() strikeThrough: any;
formattedPrice: any;
displayPrice: any;
  constructor() {

  }

  ngOnInit() {
  }

}
