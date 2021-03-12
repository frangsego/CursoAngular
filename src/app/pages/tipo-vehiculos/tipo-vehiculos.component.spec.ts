import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVehiculosComponent } from './tipo-vehiculos.component';

describe('TipoVehiculosComponent', () => {
  let component: TipoVehiculosComponent;
  let fixture: ComponentFixture<TipoVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
