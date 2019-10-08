import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaplayComponent } from './diaplay.component';

describe('DiaplayComponent', () => {
  let component: DiaplayComponent;
  let fixture: ComponentFixture<DiaplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
