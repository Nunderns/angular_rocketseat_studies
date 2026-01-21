import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  text = 'Texto do input';
  inputType = 'password';
  inputDisabled = false;

  habilitarInput(){
    this.inputDisabled = false;
  }

  desabilitarInput(){
    this.inputDisabled = true;
  }

  logarTexto(){
    console.log(this.text);
  }

  onInputChange(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.text = value;
  }
}
