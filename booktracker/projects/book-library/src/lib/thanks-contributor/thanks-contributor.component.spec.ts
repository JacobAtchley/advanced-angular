import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksContributorComponent } from './thanks-contributor.component';

describe('ThanksContributorComponent', () => {
  let component: ThanksContributorComponent;
  let fixture: ComponentFixture<ThanksContributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksContributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
