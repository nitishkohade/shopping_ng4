import { Component, ViewEncapsulation } from '@angular/core';
import { productDetailService } from '../../../core/services/productDetailService';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  providers: [productDetailService],
   encapsulation: ViewEncapsulation.None,
   styleUrls: ['./detail.component.scss']
})
export class AppDetailComponent {
  productDetail: any ;
  offerid: any;
  selectedItem: any;
  productImages = [];

  constructor(public productDetailService: productDetailService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.offerid = params.offerId;
    });
    this.productDetailService.getDeviceData(this.offerid)
      .subscribe((response: Response) => {
        const responseData = response.json();
        this.productDetail = {};
        this.productDetail.bulkProductData = responseData.productdetails;
        this.productDetail.memoryVariant = _.uniq(_.map( responseData.productdetails ,
          function(item: any) { return item.Memory; }));
          this.productDetail.memoryVariant = _.sortBy( this.productDetail.memoryVariant, [function(o)
            { return parseInt(o, 10); }]);
         this.productDetail.colorSwacthes = _.uniq(_.map(  this.productDetail.bulkProductData ,
          function(item: any) { return item.ColorSwatch; }));
          this.productDetail.defaultProduct = this.lowestPriceSku(this.productDetail.bulkProductData);
          this.setDefaultProduct();
      });

  }

  setDefaultProduct() {
           this.selectedItem = this.productDetail.defaultProduct.Memory;
           this.productImages = [];
          if (!_.isEmpty(this.productDetail.defaultProduct.FrontImage)) {
            this.productImages.push(this.productDetail.defaultProduct.FrontImage);
          }
          if (!_.isEmpty(this.productDetail.defaultProduct.LeftImage)) {
            this.productImages.push(this.productDetail.defaultProduct.LeftImage);
          }
          if (!_.isEmpty(this.productDetail.defaultProduct.BackImage)) {
            this.productImages.push(this.productDetail.defaultProduct.BackImage);
          }
          if (!_.isEmpty(this.productDetail.defaultProduct.RightImage)) {
            this.productImages.push(this.productDetail.defaultProduct.RightImage);
          }

           this.productDetail.defaultProduct.productSlides = this.productImages;
  }
updateOnMemoryChange(datasrc) {
const filterbyMemory = _.filter(this.productDetail.bulkProductData, ['Memory', datasrc]);
this.productDetail.memoryVariant = _.uniq(_.map( filterbyMemory ,
function(item: any) { return item.Memory; }));
this.productDetail.memoryVariant = _.sortBy( this.productDetail.memoryVariant, [function(o)
  { return parseInt(o, 10); }]);
this.productDetail.colorSwacthes = _.uniq(_.map(  filterbyMemory ,
function(item: any) { return item.ColorSwatch; }));

 this.productDetail.defaultProduct = this.lowestPriceSku(filterbyMemory);
this.setDefaultProduct();
}
updateOnSwatchChange(datasrc) {
const filterSwatchProduct = _.filter(this.productDetail.bulkProductData, ['ColorSwatch', datasrc]);
this.productDetail.memoryVariant = _.uniq(_.map( filterSwatchProduct ,
function(item: any) { return item.Memory; }));
this.productDetail.memoryVariant = _.sortBy( this.productDetail.memoryVariant, [function(o)
  { return parseInt(o, 10); }]);

 this.productDetail.defaultProduct = this.lowestPriceSku(filterSwatchProduct);
this.setDefaultProduct();
}
lowestPriceSku(data) {
    return _.sortBy(data, function (productValue: any) {
      return parseInt(productValue.pricing[0].components[0].purchasePrice.amount, 10);
         })[0];
}
}
