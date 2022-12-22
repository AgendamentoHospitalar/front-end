import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelHospitalComponent } from './painel-hospital.component';

describe('PainelHospitalComponent', () => {
  let component: PainelHospitalComponent;
  let fixture: ComponentFixture<PainelHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
