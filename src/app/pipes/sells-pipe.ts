import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sells',
})
export class SellsPipe implements PipeTransform {
  transform(nbSales: number): string {
    let sells = '';
    let nbsales = nbSales / 1000;
    if (nbSales < 1000) {
      sells = nbSales + ' ventes';
    } else if (nbSales >= 1000 && nbSales < 1000000) {
      sells = nbsales.toFixed(1) + 'k ventes';
    } 
    return sells;
  }
}
