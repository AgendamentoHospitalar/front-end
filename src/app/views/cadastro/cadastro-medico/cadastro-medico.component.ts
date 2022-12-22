import { IProfissionalDTO } from '../../interfaces/IProfissionalDTO';
import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css']
})
export class CadastroMedicoComponent {

  profissional: IProfissionalDTO = {
    idProfissional: 0,
    nome: '',
    telefone: '',
    endereco: '',
    ativo: true
  };

  idRecebido!:Number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  validarInformacoes(): boolean {
    if (this.profissional.nome == '') {
      return false;
    }
    return true;
  }

  salvar() {
    if (this.validarInformacoes()) {
      if (this.profissional.idProfissional == 0) {
        console.log(this.profissional)
        this.http.post('https://localhost:7267/api/Profissional/Criar', this.beneficiario)
          .subscribe((data) => {
            this.router.navigate(['/'])

          })
      } else {
        console.log('Erro na validação');
      }
    }
  }


}

