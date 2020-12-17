import { Injectable } from '@angular/core';

const cantidad = [1, 5, 10, 50, 100, 500, 1000];
const simbolo = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {
  resultado: string[] = [];

  constructor() { }

  convertir(n: number): string {
    this.resultado = [];
    let  num, letra, val, pos, insert;

    for(var i = 6; num = cantidad[i], letra = simbolo[i]; i--) {
      // Suficientemente grande
      if(n >= num) {
        // Número de letras repetidas
        var r = Math.floor(n / num);

        // Restamos el actual
        n -= r * num;

        if(r < 4){
          // Metemos las letras
          while(r--){
            this.resultado.push(letra);
          }
        } else {
          // No se pueden repetir 4+ veces
          val = this.resultado.pop(); // Última letra

          // Si es el string vacío o letra == "M" (no hay anterior)
          // usamos la letra anterior a esta
          pos = (val ? simbolo.indexOf(val) : i) + 1;

          // Y si letra == "M" -> letras[pos] no existirá y usamos M
          insert = letra + (simbolo[pos] || 'M');

          // Insertamos el string
          this.resultado.push(insert);
        }
      } else {
        // Si no vamos a poner letra usamos un ""
        // para que no afecte pop
        this.resultado.push('');
      }
    }

    return this.resultado.join('');
  }

}
