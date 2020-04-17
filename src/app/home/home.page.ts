import { Component } from '@angular/core';
import { DataService, Video } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  videos: Video[];
  
  constructor(private data: DataService) {
    this.videos = data.getVidoes();
  }



  
}
