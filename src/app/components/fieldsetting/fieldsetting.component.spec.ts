import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsettingComponent } from './fieldsetting.component';

describe('FieldsettingComponent', () => {
  let component: FieldsettingComponent;
  let fixture: ComponentFixture<FieldsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
