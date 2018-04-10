import { Component, OnInit, Input , ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {FILTER_CONTENT} from "../../../core/constant/filterContent";

import * as _ from 'lodash';
import { getBrowseService } from '../../../core/services/browseService';
import { getFilterService } from '../../../core/services/filterService';
import { FilterandsortComponent } from '../filterandsort/filterandsort.component';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  providers: [getBrowseService, getFilterService, FilterandsortComponent],
  encapsulation: ViewEncapsulation.None,
   styleUrls: ['./browse.scss'],

})
export class BrowseComponent implements OnInit {
  browseService: any;
  filterItems:object = {};
  selectedFilteredItems:string[] = [];
  loadingBackdrop:boolean = false;
  currentUrl: string;
  nitish:String="jjjjjjj";
  fil:FilterandsortComponent
  // displayMessage:string='Devices are Loaded.Please wait...';
  // display:boolean=true;
  constructor(public getBrowseService: getBrowseService, 
    private cd: ChangeDetectorRef,
    public getFilterService: getFilterService,
    private route: ActivatedRoute) {
      this.fil = new FilterandsortComponent();
    //  this.displayMessage='Devices are Loaded.Please wait...';
    this.currentUrl = this.route.snapshot.url.join('/');
    this.loadingBackdrop = true;
    this.getBrowseService.getBrowseData(this.currentUrl)
      .subscribe(
      data => {
        // this.display=false;
        this.browseService = data.json();
        this.loadingBackdrop = false;
        console.log(this.browseService);
      },
      (error) => {
        this.loadingBackdrop = false;
        console.log(error)
      }
      );

  }
  ngOnInit() {
    
   switch(this.currentUrl){
      case "accessories":
        this.filterItems = FILTER_CONTENT.accessories;
        break;
      case "cell-phones":
        this.filterItems = FILTER_CONTENT.phones;
        break;
      case "internet-devices":
        this.filterItems = FILTER_CONTENT.devices;
        break;

   }
  }

  selectedFilterItems(selected){
   
    this.getFilteredProducts(selected);
  }

  getFilteredProducts(arr:string[]){

    this.loadingBackdrop = true;
    let str:string = arr.map((item)=>item.toLowerCase()).join("|");
    
    this.getFilterService.getFilterData(this.currentUrl, str)
    .subscribe(
    data => {
      // this.display=false;
      this.browseService = data.json();
      this.loadingBackdrop = false;
      console.log(this.browseService);
    },
    (error) => {
      this.loadingBackdrop = false;
      console.log(error)
    }
    );
  }

  get(){

    this.fil.getFilter(this.fil)
  }

  
}

