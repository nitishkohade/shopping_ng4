import { split } from './../browse/arrayPipe';

import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-browsegrid',
  templateUrl: './product.grid.component.html'
})
export class BrowseGridComponent implements OnInit {
  @Input() item: any = [];
  //@Input() selectedFilteredItems:string[] = [];
  productItem = [];
  constructor() {}

  ngOnInit() {
    
    const skuList = this.item.skuCode.split('|');
    const colorSwatches = this.item.searchableColors.split('|');
    const swatchList = [];
    _.forEach(
      colorSwatches,
      function(value, key) {
        const swatch: any = {};
        swatch.color = value;
        swatch.colorSwatch = this.item.colorSwatch.split('|')[key];
        swatchList.push(swatch);
      }.bind(this)
    );

    _.forEach(
      skuList,
      function(value, key) {
        const sku: any = {};
        sku.skuId = value;
        sku.price = this.item.listPriceSku.split('|')[key];
        sku.colorSwatch = this.item.colorSwatch.split('|')[key];
        sku.thumbNail = this.item.thumbNail.split('|')[key];

        sku.memory = _.split(
          _.split(this.item.deviceMemorySKU, '|')[key],
          '_'
        )[1];
        sku.offerName = this.item.offerName.split('|')[key];
        //sku.offerDescription = this.item.offerDescription.split('|')[key];
        sku.deviceColorSKU = this.item.deviceColorSKU.split('|')[key];
        sku.offerId = this.item.offerId.split('|')[key];
        sku.color = _.split(this.item.deviceColorSKU, '|')[key];
        sku.colorName = _.startCase(_.split(sku.color.toLowerCase(), '_')[1]);
        sku.priceTypeAvailableForEIP = {
          good: _.split(this.item.itemEipPriceAvailableGC, '|')[key],
          average: _.split(this.item.itemEipPriceAvailableBC, '|')[key]
        };
        sku.priceTypeAvailableForFRP = _.split(
          this.item.priceTypeAvailableFRP,
          '|'
        )[key];

        this.productItem.push(sku);
      }.bind(this)
    );

    this.item.productsSku = this.productItem;
    this.item.swatchData = swatchList;
    const lowestPricedColorProduct = _.sortBy(this.item.productsSku, function(
      productValue: any
    ) {
      return parseInt(productValue.price, 10);
    })[0];
    this.item.defaultProduct = lowestPricedColorProduct;
  }
  updateColorSwatch(index, value) {
    this.item.defaultProduct = _.filter(this.item.productsSku, [
      'color', value.color ])[0];
  }
}

// function authorSetSku() {
//   chkAuthorSku = false;

//    var promoUrlSku= $location.search();
//    var defaultSkus = angular.isDefined(service.model.authorValue.page.defaultsku)?service.model.authorValue.page.defaultsku: service.model.defaultsku;
//    var defaultColor= angular.isDefined(promoUrlSku.color)?promoUrlSku.color : service.model.defaultSelectedColor;

//    // var pickMemory= _.uniq(_.map(service.model.bulkproductData, function(item) { return item.Memory.replace(/[\s]/g, '').toLowerCase();}));
//    // var checkMemory= _.includes(pickMemory, promoUrlSku.memory?promoUrlSku.memory.toLowerCase():'');
//    var pickColor= _.uniq(_.map(service.model.bulkproductData, function(item) { return item.Color.replace(/[\s]/g, '').toLowerCase(); }));
//    var checkColor= _.includes(pickColor,promoUrlSku.color?promoUrlSku.color.replace(/[\s]/g, '').toLowerCase() :'');

//   var defaultProduct;
//    if (promoUrlSku ) {
//         angular.forEach(service.model.bulkproductData, function (product, index) {
//             if (promoUrlSku.memory==product.Memory.replace(/[\s]/g, '').toLowerCase() && defaultColor.replace(/[\s]/g, '').toLowerCase()==product.Color.replace(/[\s]/g, '').toLowerCase() )
//                {
//                 defaultProduct = product;
//                }

//         });

//     }
//     if(angular.isDefined(defaultSkus)  &&  angular.isUndefined(defaultProduct)  && (checkColor==false))
//     {

//         angular.forEach(service.model.bulkproductData, function (product, index) {
//             if (defaultSkus.indexOf(product.SKU) > -1)
//                 defaultProduct = product;
//         });

//     }

//   if (angular.isDefined(defaultProduct)) {
//     service.model.selectedMemoryData = _.filter(service.model.bulkproductData, {Color: defaultProduct.Color});
//     service.model.selectedMemory=defaultProduct.SKU;
//     chkAuthorSku = true;
//     return defaultProduct;
//   }

//   if(angular.isDefined(defaultColor) && !_.isEmpty(defaultColor)) {

//    service.model.selectedMemoryData = _.filter(service.model.bulkproductData, function (product) {
//       return angular.isDefined(product.Color) ?
// product.Color.toLowerCase().replace(/[\s]/g, '') == defaultColor.toLowerCase() : false
//     });

//     if (!_.isEmpty(service.model.selectedMemoryData)) {
//       var lowestPricedColorProduct = _.sortBy(service.model.selectedMemoryData, function (productValue) {
//         return parseInt(productValue.pricing[0].components[0].purchasePrice.amount, 10);
//       });
//       service.model.selectedMemory = lowestPricedColorProduct[0].SKU;

//       return lowestPricedColorProduct[0];
//     }
//   }

//   var lowestPricedProduct=_.sortBy(service.model.bulkproductData, function (productValue) {
//     return parseInt(productValue.pricing[0].components[0].purchasePrice.amount, 10);
//   });

//   service.model.selectedMemoryData = _.filter(service.model.bulkproductData, {Color: lowestPricedProduct[0].Color});
//   service.model.selectedMemory=lowestPricedProduct[0].SKU;

//   return lowestPricedProduct[0];
// }

// function getDefaultColor() {
//   if (service.model.defaultColor) {
//     angular.forEach(service.model.productdetailsData, function (product, key) {
//       if (product.Color == service.model.defaultColor) {
//         service.model.selectedProduct = product;
//         service.model.selectedMemoryData = _.filter(service.model.bulkproductData, {Color: product.Color});
//       }
//     });
//   }
// }
