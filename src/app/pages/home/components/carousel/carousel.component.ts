import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/core/services/games.service';
import { Games } from 'src/app/shared/models/games';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
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
