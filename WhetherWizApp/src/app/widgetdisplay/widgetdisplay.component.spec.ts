import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetdisplayComponent } from './widgetdisplay.component';

describe('WidgetdisplayComponent', () => {
  let component: WidgetdisplayComponent;
  let fixture: ComponentFixture<WidgetdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
