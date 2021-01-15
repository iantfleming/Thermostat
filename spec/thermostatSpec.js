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
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(21);
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

  describe('reset', () => {
    it('should reset the temperature back to 20 degrees', () => {
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20);
    })
  });
  
  describe('energyUsage', () => {
    it('should return Low if temperature < 18', () => {
      thermostat.temperature = 17
      expect(thermostat.energyUsage()).toEqual("Low");
    });

    it('should return Medium if temperature > 18 but <= 25', () => {
      thermostat.temperature = 23
      expect(thermostat.energyUsage()).toEqual("Medium");
    });

    it('should return High if temperature > 25', () => {
      thermostat.togglePowerMode()
      thermostat.temperature = 28
      expect(thermostat.energyUsage()).toEqual("High");
    });
  })
});
