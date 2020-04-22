import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderGreetingComponent } from './reader-greeting.component';

describe('ReaderGreetingComponent', () => {
  let component: ReaderGreetingComponent;
  let fixture: ComponentFixture<ReaderGreetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderGreetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
