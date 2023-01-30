import { Component, Input } from '@angular/core';
import { Gif } from '../models';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})

export class GiphyComponent {

  @Input()
  gifs: Gif[] = []



}
