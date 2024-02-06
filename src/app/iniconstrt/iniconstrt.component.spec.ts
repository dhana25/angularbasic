import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniconstrtComponent } from './iniconstrt.component';

describe('IniconstrtComponent', () => {
  let component: IniconstrtComponent;
  let fixture: ComponentFixture<IniconstrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniconstrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniconstrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
