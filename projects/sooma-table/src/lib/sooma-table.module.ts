import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoomaTableComponent } from './sooma-table.component';



@NgModule({
  declarations: [SoomaTableComponent],
  imports: [
    CommonModule,
  ],
  exports: [SoomaTableComponent]
})
export class SoomaTableModule { }
