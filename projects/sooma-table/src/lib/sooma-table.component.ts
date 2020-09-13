import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'sooma-table',
  templateUrl: './sooma-table.component.html'
})
export class SoomaTableComponent implements OnInit, OnChanges {

  @Output() function: EventEmitter<any> = new EventEmitter<string>();
  @Input() headings:Array<any>;
  @Input() data:Array<any>;
  @Input() parentSubject:Subject<any>;

  p:number = 1;
  count:number;

  table_config = {
    titles: undefined,
    data: undefined,  
  }
  
  constructor() { }
  ngOnInit() {
    this.getTable();
  }

  ngOnChanges(){
    this.table_config.titles = this.headings;
    this.table_config.data = this.data;
    this.count = this.table_config.data.length;
    this.parentSubject.subscribe(reply => {
      console.log("reply in child from triggered method in parent:", reply);
    });
  }

  getTable(){
    this.table_config.titles = this.headings;
    this.table_config.data = this.data;
    this.count = this.table_config.data.length;
    // this.parentSubject.subscribe(reply => {
    //   console.log("reply in child from triggered method in parent:", reply);
    // });
  }

  passParam(action: string, row:Object) {
    let custom_object = Object.assign({}, row);
    const param = {action:action, row:custom_object};
    this.function.emit(param);
  }

}
