import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEspecialidadeComponent } from './painel-especialidade.component';

describe('PainelEspecialidadeComponent', () => {
  let component: PainelEspecialidadeComponent;
  let fixture: ComponentFixture<PainelEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
