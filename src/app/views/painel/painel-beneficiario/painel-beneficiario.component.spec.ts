import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelBeneficiarioComponent } from './painel-beneficiario.component';

describe('PainelBeneficiarioComponent', () => {
  let component: PainelBeneficiarioComponent;
  let fixture: ComponentFixture<PainelBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
