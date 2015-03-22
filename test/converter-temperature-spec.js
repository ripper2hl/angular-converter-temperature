'use strict';

describe('Filtros para el clima', function(){

  beforeEach( module( 'ngConverterTemperature' ) );

  var $converter-temperature;
  beforeEach(inject(function ($filter) {
    $converter-temperature = $filter('$converter-temperature');
  }));

  var number;
  it("Debe convertir kelvin a celsius", function () {
    number = '0';
    expect($converter-temperature(number)).toBe('-272°C');
  });

  it("Debe convertir kelvin a Fahrenheit", function () {
    number = '0';
    expect($converter-temperature(number,'k','f')).toBe('-460°F');
  });

  it("Debe convertir celsius a kelvin", function () {
    number = '0';
    expect($converter-temperature(number,'c','k')).toBe('273°K');
  });

  it("Debe convertir celsius a Fahrenheit", function () {
    number = '0';
    expect($converter-temperature(number,'c','f')).toBe('32°F');
  });

  it("Debe convertir Fahrenheit a celsius", function () {
    number = '0';
    expect($converter-temperature(number,'f','c')).toBe('-18°C');
  });

  it("Debe convertir Fahrenheit a kelvin", function () {
    number = '0';
    expect($converter-temperature(number,'f','k')).toBe('255°K');
  });

  it("Debe convertir solo la nomenclatura a escala Celcius sin decimales", function () {
    number = '1.0';
    expect($converter-temperature(number,'c','c')).toBe('1°C');
  });

  it("Debe convertir solo la nomenclatura a escala Kelvin sin decimales", function () {
    number = '1.0';
    expect($converter-temperature(number,'k','k')).toBe('1°K');
  });

  it("Debe convertir solo la nomenclatura a escala Fahrenheit sin decimales", function () {
    number = '1.0';
    expect($converter-temperature(number,'f','f')).toBe('1°F');
  });

  it("Debe omitir ejecutar una accion si no es un numero", function () {
    number = undefined;
    expect($converter-temperature(number)).toBe('');

    number = 'a';
    expect($converter-temperature(number)).toBe('');

    number = '.';
    expect($converter-temperature(number)).toBe('');

    number = '\a';
    expect($converter-temperature(number)).toBe('');
  });
});
