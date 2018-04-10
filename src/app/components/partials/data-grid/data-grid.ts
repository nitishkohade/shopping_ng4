import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'data-grid',
    templateUrl: './data-grid.html',

})
export class DataGridComponent implements OnInit {
    @Input() dataList: any;
     @Output() userUpdated = new EventEmitter();


  constructor() {
     this.userUpdated.emit();
  }

 
  ngOnInit() {

   
    
  }
remove(index)
{
    this.dataList.splice(index,1)
}
  edit(index,item)
  {
  this.userUpdated.emit(item);
  }
}