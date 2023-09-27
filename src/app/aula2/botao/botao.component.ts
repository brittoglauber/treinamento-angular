import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Output() botaoClicado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensagem(botao: string) {
    this.botaoClicado.emit(botao);
  }

}
