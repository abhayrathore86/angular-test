import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFilledFormComponent } from './single-filled-form.component';

describe('SingleFilledFormComponent', () => {
  let component: SingleFilledFormComponent;
  let fixture: ComponentFixture<SingleFilledFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFilledFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFilledFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
