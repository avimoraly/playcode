import { Game, GamesObject, GameType } from './services/interfaces';
import { GamesService } from './services/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  gamesData: GamesObject;
  currentType: GameType = null;
  currentgames: Game[] = [];

  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(data => {
      this.gamesData = data;
    });
  }

  onNewType(type: GameType): void {
    if (type !== this.currentType) {
      this.currentgames = [];
      this.currentType = type;
      console.log('this.gamesData.Games',this.gamesData.Games)
      this.currentType.Games.forEach((gameId: number) => {
        console.log('gameId',gameId)
        this.gamesData.Games.forEach((game: Game) => {

          if (game.GameID === gameId) {
            this.currentgames.push(game);
          }
        });
      });
      console.log('this.currentType', this.currentType);
      console.log('this.currentgames',this.currentgames)
    }
  }

}

