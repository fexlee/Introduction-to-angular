import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammalsComponent } from './mammals.component';

describe('MammalsComponent', () => {
  let component: MammalsComponent;
  let fixture: ComponentFixture<MammalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
