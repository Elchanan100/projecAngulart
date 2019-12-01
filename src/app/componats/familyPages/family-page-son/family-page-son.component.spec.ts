import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPageSonComponent } from './family-page-son.component';

describe('FamilyPageSonComponent', () => {
  let component: FamilyPageSonComponent;
  let fixture: ComponentFixture<FamilyPageSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPageSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPageSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
