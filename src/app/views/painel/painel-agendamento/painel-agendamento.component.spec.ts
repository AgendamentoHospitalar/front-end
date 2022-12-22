import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAgendamentoComponent } from './painel-agendamento.component';

describe('PainelAgendamentoComponent', () => {
  let component: PainelAgendamentoComponent;
  let fixture: ComponentFixture<PainelAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelAgendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
