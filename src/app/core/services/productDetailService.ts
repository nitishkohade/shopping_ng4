import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { apiUrls } from '../constant/apiUrls';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class productDetailService {
    model:any;
    constructor(private http: Http) { }

    getDeviceData(offerId:string)
    {
        var url= apiUrls.url.product.host + apiUrls.url.product.detail.service +"/"+ offerId;
         var headers = new Headers();         
        headers.append('Authorization', 'Bearer ' + localStorage.access_token );
            return this.http.get(url,{ headers: headers });
            
    }
    
}