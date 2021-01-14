'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  describe('up', function(){
    it('increases the temperature', function(){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
    it('cannot increase above 32 when not in power saving mode', function() {
      for (let i = 0; i < 13; i++) {
        thermostat.up()
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
    it('cannot increase above 25 when in power saving mode', function() {
      thermostat.turnOnPowerSaving()
      for (let i = 0; i < 6; i++) {
        thermostat.up()
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('down', function(){
    it('decreases the temperature', function(){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
    it('throws an error when temperature reaches 10', function (){
      for (let i = 0; i < 11; i++) {
        thermostat.down();
        // console.log(thermostat.getCurrentTemperature());
      };
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });


});
