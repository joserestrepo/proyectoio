import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('enterState', [
      state('void',style({
        opacity:0
      })),
      transition(':enter',[
        animate("1s",style({
          opacity:1
        }))
      ])
    ]),
  ],
})
export class AppComponent {
  title = 'front-proyectoIo';
  isOpen = false;
}
