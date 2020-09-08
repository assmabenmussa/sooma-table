import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sooma-table',
  template: `
    <table>
      <tr *ngFor="let row of arr">
        {{row}}
      </tr>
    </table>
    `
})
export class SoomaTableComponent implements OnInit {

  arr = [1, 2 , 3]

  constructor() { }


  ngOnInit() {
    
  }


}
