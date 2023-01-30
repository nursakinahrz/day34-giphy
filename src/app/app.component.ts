import { Component } from '@angular/core';
import { Gif, SearchCriteria } from './models';
import { GiphyService } from './giphy-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 gifs: Gif[] = []

  constructor(private giphySvc: GiphyService) {}

  onSearch(searchCriteria: SearchCriteria) {
    console.info('>>>> searchCriteria', searchCriteria)
    this.giphySvc.search(searchCriteria)
    .then(result => {
      console.info(">>>>> result", + result)
      this.gifs = result
    })
    .catch(error => {
      console.info('>>>> error: ' + error)
    })

    console.info('---------- after calling giphySvc.search()')


  }



    
  }

