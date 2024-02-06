import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencaptopComponent } from './vencaptop.component';

describe('VencaptopComponent', () => {
  let component: VencaptopComponent;
  let fixture: ComponentFixture<VencaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VencaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VencaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
