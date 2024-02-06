import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencapbottomComponent } from './vencapbottom.component';

describe('VencapbottomComponent', () => {
  let component: VencapbottomComponent;
  let fixture: ComponentFixture<VencapbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VencapbottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VencapbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
