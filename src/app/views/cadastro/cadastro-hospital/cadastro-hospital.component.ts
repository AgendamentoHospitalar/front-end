import { IHospitalDTO } from '../../interfaces/IHospitalDTO';
import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-hospital',
  templateUrl: './cadastro-hospital.component.html',
  styleUrls: ['./cadastro-hospital.component.css']
})
export class CadastroHospitalComponent {

  hospital: IHospitalDTO = {
    idHospital: 0,
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    cnes: '',
    ativo: true
  };

  idRecebido!:Number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  validarInformacoes(): boolean {
    if (this.hospital.nome == '') {
      return false;
    }
    return true;
  }

  salvar() {
    if (this.validarInformacoes()) {
      if (this.hospital.idHospital == 0) {
        console.log(this.hospital)
        this.http.post('https://localhost:7267/api/Hospital/Criar', this.hospital)
          .subscribe((data) => {
            this.router.navigate(['/'])

          })
      } else {
        console.log('Erro na validação');
      }
    }
  }


}
