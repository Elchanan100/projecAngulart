import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPageFatherComponent } from './family-page-father.component';

describe('FamilyPageFatherComponent', () => {
  let component: FamilyPageFatherComponent;
  let fixture: ComponentFixture<FamilyPageFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPageFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPageFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
