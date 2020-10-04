export interface GamesObject {
  Games: Game[];
  GameTypes: GameType[];
}

export interface Game {
  GameID: number;
  GameName: string;
  ServerGameID: string;
}

export interface GameType {
  Games: number[];
  Name: string;
  Order: number;
}
