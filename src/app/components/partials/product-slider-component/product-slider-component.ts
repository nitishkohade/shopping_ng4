import { Component, OnInit, Input , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider-component.html',
  styleUrls: ['./product-slider-component.scss'],
     encapsulation: ViewEncapsulation.None,
})
export class ProductSliderComponent implements OnInit {
@Input()  items: Array<any> = [];
selectedItem: any;
 slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'dots': true, 'fade': true , autoplay: true,
  autoplaySpeed: 2000};

  addSlide() {
    this.items.push({img: 'http://placehold.it/350x150/777777'});
  }
   removeSlide() {
    this.items.length = this.items.length - 1;
  }
  afterChange(e) {
    console.log('afterChange');
  }
  constructor() { }

  ngOnInit() {
  }

}
