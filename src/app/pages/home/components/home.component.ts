import { GamesService } from './../../../core/services/games.service';
import { Games } from './../../../shared/models/games';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
