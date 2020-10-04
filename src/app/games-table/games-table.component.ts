import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../services/interfaces';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements OnInit {
  @Input() games: Game[];
  fallbackUrl = `https://compass-ssl.xbox.com/assets/dc/48/dc486960-701e-421b-b145-70d04f3b85be.jpg?n=Game-Hub_Content-Placement-0_New-Releases-No-Copy_740x417_02.jpg`;
  constructor() { }

  ngOnInit(): void {
  }

}
