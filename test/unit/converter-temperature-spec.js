'use strict';

describe('Filtros para el clima', function(){

  beforeEach( module( 'ngConverterTemperature' ) );

  var converterTemperature;
  beforeEach(inject(function ($filter) {
    converterTemperature = $filter('$converter-temperature');
  }));

  var number;
  it("Debe convertir kelvin a celsius", function () {
    number = '0';
    expect(converterTemperature(number)).toBe('-272°C');
  });

  it("Debe convertir kelvin a Fahrenheit", function () {
    number = '0';
    expect(converterTemperature(number,'k','f')).toBe('-460°F');
  });

  it("Debe convertir celsius a kelvin", function () {
    number = '0';
    expect(converterTemperature(number,'c','k')).toBe('273°K');
  });

  it("Debe convertir celsius a Fahrenheit", function () {
    number = '0';
    expect(converterTemperature(number,'c','f')).toBe('32°F');
  });

  it("Debe convertir Fahrenheit a celsius", function () {
    number = '0';
    expect(converterTemperature(number,'f','c')).toBe('-18°C');
  });

  it("Debe convertir Fahrenheit a kelvin", function () {
    number = '0';
    expect(converterTemperature(number,'f','k')).toBe('255°K');
  });

  it("Debe convertir solo la nomenclatura a escala Celcius sin decimales", function () {
    number = '1.0';
    expect(converterTemperature(number,'c','c')).toBe('1°C');
  });

  it("Debe convertir solo la nomenclatura a escala Kelvin sin decimales", function () {
    number = '1.0';
    expect(converterTemperature(number,'k','k')).toBe('1°K');
  });

  it("Debe convertir solo la nomenclatura a escala Fahrenheit sin decimales", function () {
    number = '1.0';
    expect(converterTemperature(number,'f','f')).toBe('1°F');
  });

  it("Debe omitir ejecutar una accion si no es un numero", function () {
    number = undefined;
    expect(converterTemperature(number)).toBe('');

    number = 'a';
    expect(converterTemperature(number)).toBe('');

    number = '.';
    expect(converterTemperature(number)).toBe('');

    number = '\a';
    expect(converterTemperature(number)).toBe('');
  });
});
