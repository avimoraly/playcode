import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameType } from '../services/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() gamesTypes: GameType[];
  @Output() gotNewType: EventEmitter<GameType> = new EventEmitter<GameType>();

  currentTypeIndex = -1;

  constructor() { }

  ngOnInit(): void {
    this.gamesTypes.sort(this.compare);
  }

  typeChoose(type: GameType, index: number): void {
    this.currentTypeIndex = index;
    this.gotNewType.emit(type);
  }

  private compare( a: GameType, b: GameType ): number {
    if ( a.Order < b.Order ){
      return -1;
    }
    if ( a.Order > b.Order ){
      return 1;
    }
    return 0;
  }
}
