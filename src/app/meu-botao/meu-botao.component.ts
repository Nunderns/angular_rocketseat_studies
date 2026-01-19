import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-botao',
  standalone: true,
  templateUrl: './meu-botao.component.html',
  styleUrls: ['./meu-botao.component.css']
})
export class MeuBotaoComponent {


  filtrar() {
    console.log('Métido filtrar')
  }
}
