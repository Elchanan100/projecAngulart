import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPotoComponent } from './user-poto.component';

describe('UserPotoComponent', () => {
  let component: UserPotoComponent;
  let fixture: ComponentFixture<UserPotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
