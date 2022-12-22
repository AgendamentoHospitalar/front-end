import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBeneficiarioDTO } from '../interfaces/IBeneficiarioDTO';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  beneficiario: IBeneficiarioDTO = {
    idBeneficiario: 0,
    nome: '',
    cpf: '',
    telefone: '',
    endereco: '',
    numeroCarteirinha: '',
    ativo: true,
    email: '',
    senha: '',
  };

  idRecebido!:Number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  validarInformacoes(): boolean {
    if (this.beneficiario.nome == '') {
      return false;
    }
    return true;
  }

  salvar() {
    if (this.validarInformacoes()) {
      if (this.beneficiario.idBeneficiario == 0) {
        console.log(this.beneficiario)
        this.http.post('https://localhost:7267/api/Beneficiario/Criar', this.beneficiario)
          .subscribe((data) => {
            this.router.navigate(['/'])

          })
      } else {
        console.log('Erro na validação');
      }
    }
  }


}
