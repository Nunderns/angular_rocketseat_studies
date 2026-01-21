import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  onButtonClick(){
    console.log('onButtonClick')
  }

  onInput(event: Event){
    console.log('onInput')
    console.log('event', event)

    const target = (event.target as HTMLInputElement).value;

    console.log('value: ', target);
  }

  onBlur(){
    console.log('onBlur')
  }
  onFocus(){
    console.log('onFocus');
  }
}
