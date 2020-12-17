import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RomanNumeralsService } from './service/roman-numerals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Conversor';
  subtitle = 'Número arábigo a número romano'
  resultado = false;
  numeroControlGroup: FormGroup;
  numRomano = '';
  errors = {
    min: 'El valor mínimo aceptado es uno (1)',
    max: 'El valor máximo aceptado es mil (1000)',
    required: 'Campo requerido. '};

  constructor(private romanService: RomanNumeralsService) {}

  ngOnInit() {
    this.numeroControlGroup = new FormGroup({
      numeroControl: new FormControl('',
      [Validators.required, Validators.min(0), Validators.max(1000)])
    });

  }

  convertir() {
    this.numRomano = this.romanService.convertir(this.numeroControlGroup.get('numeroControl').value);
    this.resultado = true;
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.numeroControlGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
      if (control.errors.required) {
        return this.errors.required;
      }
      if (control.errors.min) {
        return this.errors.min + ' usted ingresó ' + control.errors.min.actual + '. ';
      }
      if (control.errors.max) {
        return this.errors.max + ' usted ingresó ' + control.errors.max.actual + '. ';
      }
    } else {
      return error;
    }
  }

}
