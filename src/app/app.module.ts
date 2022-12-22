import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { AgendamentoComponent } from './views/agendamento/agendamento.component';
import { PainelComponent } from './views/painel/painel.component';
import { CadastroMedicoComponent } from './views/cadastro/cadastro-medico/cadastro-medico.component';
import { CadastroHospitalComponent } from './views/cadastro/cadastro-hospital/cadastro-hospital.component';
import { EditarEspecialidadeComponent } from './views/editar/editar-especialidade/editar-especialidade.component';
import { EditarProfissionalComponent } from './views/editar/editar-profissional/editar-profissional.component';
import { EditarHospitalComponent } from './views/editar/editar-hospital/editar-hospital.component';
import { EditarBeneficiarioComponent } from './views/editar/editar-beneficiario/editar-beneficiario.component';
import { EditarAgendamentoComponent } from './views/editar/editar-agendamento/editar-agendamento.component';
import { PainelHospitalComponent } from './views/painel/painel-hospital/painel-hospital.component';
import { PainelEspecialidadeComponent } from './views/painel/painel-especialidade/painel-especialidade.component';
import { PainelProfissionalComponent } from './views/painel/painel-profissional/painel-profissional.component';
import { PainelBeneficiarioComponent } from './views/painel/painel-beneficiario/painel-beneficiario.component';
import { PainelAgendamentoComponent } from './views/painel/painel-agendamento/painel-agendamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    AgendamentoComponent,
    PainelComponent,
    CadastroMedicoComponent,
    CadastroHospitalComponent,
    EditarEspecialidadeComponent,
    EditarProfissionalComponent,
    EditarHospitalComponent,
    EditarBeneficiarioComponent,
    EditarAgendamentoComponent,
    PainelHospitalComponent,
    PainelEspecialidadeComponent,
    PainelProfissionalComponent,
    PainelBeneficiarioComponent,
    PainelAgendamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [HttpClientModule, AppRoutingModule, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
