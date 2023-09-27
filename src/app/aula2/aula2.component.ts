import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula2',
  templateUrl: './aula2.component.html',
  styleUrls: ['./aula2.component.css']
})
export class Aula2Component implements OnInit {

  mensagem: string = ''
  estilo: string = ''

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }


  teste(): void {
    console.log('click btn')
  }

  teste2(): void {
    console.log('on fucos')
  }

  onBotaoClicado(botao: string) {
    if (botao === 'salvar') {
      this.estilo = 'salvar';
    }

    if (botao === 'cancelar') {
      this.estilo = 'cancelar';
    }

    this.mensagem = `Botão "${botao}" foi clicado!`
  }

}
