import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('enterState', [
      state('void',style({
        transform : 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate("0.5s",style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ]),
  ],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
