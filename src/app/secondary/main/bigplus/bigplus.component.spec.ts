import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigplusComponent } from './bigplus.component';

describe('BigplusComponent', () => {
  let component: BigplusComponent;
  let fixture: ComponentFixture<BigplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
