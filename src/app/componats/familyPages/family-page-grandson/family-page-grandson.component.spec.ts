import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPageGrandsonComponent } from './family-page-grandson.component';

describe('FamilyPageGrandsonComponent', () => {
  let component: FamilyPageGrandsonComponent;
  let fixture: ComponentFixture<FamilyPageGrandsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPageGrandsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPageGrandsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
