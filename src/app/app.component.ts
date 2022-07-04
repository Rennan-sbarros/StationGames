import { Games } from './shared/models/games';
import { Component, OnInit } from '@angular/core';
import { GamesService } from './core/services/games.service';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public games!: Games[];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesList();
  }

  gamesList() {
    this.gamesService.getGames().subscribe((result: any) => {
      this.games = result?.results;
    });
  }

  onSwiper([swiper]: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
