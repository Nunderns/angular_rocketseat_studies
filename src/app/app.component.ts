import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuBotaoComponent } from './meu-botao/meu-botao.component';
import { BotaoFlatComponent } from './botao-flat/botao-flat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuBotaoComponent, BotaoFlatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
