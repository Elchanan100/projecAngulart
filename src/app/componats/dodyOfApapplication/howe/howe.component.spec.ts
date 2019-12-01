import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoweComponent } from './howe.component';

describe('HoweComponent', () => {
  let component: HoweComponent;
  let fixture: ComponentFixture<HoweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
