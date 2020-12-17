import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`Result Roman init`, () => {
    let cant = service.resultado.length;
    expect(cant).toEqual(0);
  });

  it(`Number 1 -> I`, () => {
    expect(service.convertir(1)).toEqual('I');
  });

  it(`Number 5 -> V`, () => {
    expect(service.convertir(5)).toEqual('V');
  });

  it(`Number 10 -> X`, () => {
    expect(service.convertir(10)).toEqual('X');
  });

  it(`Number 50 -> L`, () => {
    expect(service.convertir(50)).toEqual('L');
  });

  it(`Number 100 -> C`, () => {
    expect(service.convertir(100)).toEqual('C');
  });

  it(`Number 500 -> D`, () => {
    expect(service.convertir(500)).toEqual('D');
  });

  it(`Number 1000 -> M`, () => {
    expect(service.convertir(1000)).toEqual('M');
  });

  it(`Number 4 -> IV`, () => {
    expect(service.convertir(4)).toEqual('IV');
  });

  it(`Number 499 -> CDXCIX`, () => {
    expect(service.convertir(499)).toEqual('CDXCIX');
  });

  it(`Number 27 -> XXVII`, () => {
    expect(service.convertir(27)).toEqual('XXVII');
  });

  it(`Number 54 -> LIV`, () => {
    expect(service.convertir(54)).toEqual('LIV');
  });


});
