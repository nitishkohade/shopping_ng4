import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var arr= value.split('.');
    return '$' + arr[0] ;
  }

}
