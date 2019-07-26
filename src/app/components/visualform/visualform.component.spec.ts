import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualformComponent } from './visualform.component';

describe('VisualformComponent', () => {
  let component: VisualformComponent;
  let fixture: ComponentFixture<VisualformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
