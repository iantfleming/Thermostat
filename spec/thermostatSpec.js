'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });
  it('starts with power saving mode turned on by default', function(){
    expect(thermostat.getIsPowerSavingModeOn()).toBe(true);
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

    it('should not turn exceed 25 degrees if power save mode is on', () => {
      thermostat.powerSavingMode = true
      expect(function () { thermostat.up(6) }).toThrow(new TypeError("Temperature can't be higher than 25 if PSM is on"));
    });

    it('should not exceed 32 degrees if power save mode is off', () => {
      thermostat.powerSavingMode = false
      expect(function () { thermostat.up(13) }).toThrow(new TypeError("Temperature can't be higher than 32 if PSM is off"));
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
