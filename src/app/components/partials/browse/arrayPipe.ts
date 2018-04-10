import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'split'})
export class split implements PipeTransform {
    transform(value: any): any {
        var arr=value.split("|");
        return arr[0];
    }
}