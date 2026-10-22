import { Component, input } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  imports: [],
  selector: 'mol-game-item',
  styleUrl: './game-item.css',
  templateUrl: './game-item.html',
})
export class GameItem {
  game=input.required<Game>();
  nbrsale(game: Game): number {
    return game.salePrice < game.price ? game.sales : 0;
  }
}
