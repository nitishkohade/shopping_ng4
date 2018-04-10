import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { apiUrls } from '../constant/apiUrls';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class getBrowseService {
MapUrl =
{
'cell-phones': 'phone',
'accessories': 'accessory',
'internet-devices': 'internet-device'
};
    constructor(private http: Http) { }

    getBrowseData(productType) {
       const pageType = this.MapUrl[productType];
        const url = apiUrls.url.product.host + apiUrls.url.product.browse.service + apiUrls.url.product.browse.parameters[pageType];
         const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.access_token );
            return this.http.get(url, { headers: headers });
    }
}
