import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './views/agendamento/agendamento.component';
import { CadastroHospitalComponent } from './views/cadastro/cadastro-hospital/cadastro-hospital.component';
import { CadastroMedicoComponent } from './views/cadastro/cadastro-medico/cadastro-medico.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { EditarAgendamentoComponent } from './views/editar/editar-agendamento/editar-agendamento.component';
import { EditarBeneficiarioComponent } from './views/editar/editar-beneficiario/editar-beneficiario.component';
import { EditarEspecialidadeComponent } from './views/editar/editar-especialidade/editar-especialidade.component';
import { EditarHospitalComponent } from './views/editar/editar-hospital/editar-hospital.component';
import { EditarProfissionalComponent } from './views/editar/editar-profissional/editar-profissional.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PainelAgendamentoComponent } from './views/painel/painel-agendamento/painel-agendamento.component';
import { PainelBeneficiarioComponent } from './views/painel/painel-beneficiario/painel-beneficiario.component';
import { PainelEspecialidadeComponent } from './views/painel/painel-especialidade/painel-especialidade.component';
import { PainelHospitalComponent } from './views/painel/painel-hospital/painel-hospital.component';
import { PainelProfissionalComponent } from './views/painel/painel-profissional/painel-profissional.component';
import { PainelComponent } from './views/painel/painel.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro-usuario',
    component: CadastroComponent,
  },
  {
    path: 'cadastro-medico',
    component: CadastroMedicoComponent,
  },
  {
    path: 'cadastro-hospital',
    component: CadastroHospitalComponent,
  },
  {
    path: 'agendamento',
    component: AgendamentoComponent,
  },
  {
    path: 'painel',
    component: PainelComponent,
  },
  {
    path:'editar-agendamento',
    component: EditarAgendamentoComponent,
  },
  {
    path:'editar-beneficiario',
    component: EditarBeneficiarioComponent,
  },
  {
    path: 'editar-especialidade',
    component: EditarEspecialidadeComponent,
  },
  {
    path: 'editar-hospital',
    component: EditarHospitalComponent,
  },
  {
    path: 'editar-profissional',
    component: EditarProfissionalComponent,
  },
  {
    path: 'painel/painel-agendamento',
    component: PainelAgendamentoComponent,
  },
  {
    path: 'painel/painel-beneficiario',
    component: PainelBeneficiarioComponent,
  },
  {
    path: 'painel/painel-especialidade',
    component: PainelEspecialidadeComponent,
  },
  {
    path: 'painel/painel-hospital',
    component: PainelHospitalComponent,
  },
  {
    path: 'painel/painel-profissional',
    component: PainelProfissionalComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
