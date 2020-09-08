import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoomaTableComponent } from './sooma-table.component';

describe('SoomaTableComponent', () => {
  let component: SoomaTableComponent;
  let fixture: ComponentFixture<SoomaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoomaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoomaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
