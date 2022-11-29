import { ListarPensamentoComponent } from './../listar-pensamento/listar-pensamento.component';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private Service: PensamentoService,
    private router: Router  //variavel que recebe a funcao router para melhor navegação do componente
    ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.Service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']) //router recebe metodo navigate para redirecionar
    });
  }

  cancelar() {
    alert("Ação cancelada!")
  }

}
