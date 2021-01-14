'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.currentMaximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_OFF;
    // this.isPowerSavingOn = false;
  };

  getCurrentTemperature() {
    return this.temperature
  };

  up() {
    if (this.isMaximumTemperature()) {
      return;
    } else {
      this.temperature += 1;
    };
  };

  down() {
    if (this.isMinimumTemperature()) {
      return;
    } else {
      this.temperature -= 1;
    };
  };

  isMaximumTemperature() {
    return this.getCurrentTemperature() === this.currentMaximumTemperature;
  };

  isMinimumTemperature() {
    return this.getCurrentTemperature() === this.MINIMUM_TEMPERATURE;
  };

  turnOnPowerSaving() {
    // this.isPowerSavingOn = true;
    this.currentMaximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_ON;
  };

};
