import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowloadComponent } from './slowload.component';

describe('SlowloadComponent', () => {
  let component: SlowloadComponent;
  let fixture: ComponentFixture<SlowloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlowloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
