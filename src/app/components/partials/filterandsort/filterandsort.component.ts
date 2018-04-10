import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
//import { BrowseComponent } from '../browse/browse.component';
@Component({
  selector: 'app-filterandsort',
  templateUrl: './filterandsort.component.html',
  styleUrls: ['./filterandsort.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class FilterandsortComponent implements OnInit, AfterViewInit {
  @Input() filterItems:object={};
  @Output('selectedFilterItems') 
  selectedFilterItemsEvent = new EventEmitter<string[]>();
  filterMenuIsOpen = false;
  sortMenuIsOpen = false;
  filteredItems:string[] = [];
  nnn:String="from child"

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    console.log("kkkkkkkkkkkkkkkk")
  }
  isMobileView() {
      return (window.screen.width < 767);
    }
    toggleFilterMenu() {
      this.filterMenuIsOpen = ! this.filterMenuIsOpen ;
    }
    toggleSortMenu() {
      this.sortMenuIsOpen= !this.sortMenuIsOpen;
    }
    ignoreClick($event)
    {
      $event.stopPropagation();
    }
    clickFilter(value, header){
      
      if(this.filteredItems.includes(value)){
        var i = this.filteredItems.indexOf(value);
        this.filteredItems.splice(i,1);
        this.selectedFilterItemsEvent.emit(this.filteredItems);
      }else{
      this.filteredItems.push(value);
      this.selectedFilterItemsEvent.emit(this.filteredItems);
      }
    }

    getFilter(data:any){
      console.log(this);
      console.log(data);
      this.nnn = "calling from parent";
      
    }

}
