(function(){
  'use strict';

  var app = angular.module('ngConverterTemperature',[]);

  app.filter( '$converter-temperature' , function ( ) {

    function kelvinCelsius (number){
      var celsius = number - 272.15;
      celsius = (celsius).toFixed();
      return celsius + '°C';
    }

     function kelvinFahrenheit (number){
      var fahrenheit = (number - 273.15)* 1.8000 + 32.00;
      fahrenheit = (fahrenheit).toFixed();
      return fahrenheit + '°F';
    }

    function celsiusKelvin (number){
      var kelvin = number + 273;
      kelvin = (kelvin).toFixed(0);
      return kelvin + '°K';
    }

    function celsiusFahrenheit (number){
      var fahrenheit = number * 1.8000 + 32.00;
      fahrenheit = fahrenheit.toFixed();
      return fahrenheit + '°F';
    }

   function fahrenheitCelsius (number){
      var celsius = (number-32)/1.8000;
      celsius = celsius.toFixed();
      return celsius + '°C';
    }

  function fahrenheitKelvin (number){
      var kelvin = ((number -32)/1.8000) + 273.15;
      kelvin = kelvin.toFixed();
      return kelvin + '°K';
    }

    function noConvert (number,scale){
      return number.toFixed() + scale;
    }

    return function(number,from,to){
      if(!isNaN(number)){
      var number = parseFloat(number);
        switch(from+to){
          case 'kc' :
            return kelvinCelsius(number);

          case 'kf' :
          return kelvinFahrenheit(number);

          case 'ck' :
          return celsiusKelvin(number);

          case 'cf' :
            return celsiusFahrenheit(number);

          case 'fc' :
            return fahrenheitCelsius(number);

          case 'fk' :
            return fahrenheitKelvin(number);

          case 'cc' :
            return noConvert(number,'°C');

          case 'kk' :
            return noConvert(number,'°K');

          case 'ff':
            return noConvert(number,'°F');

          default :
          return kelvinCelsius(number);
        }
      }else{
        return '';
      }
    };
  });

})();
