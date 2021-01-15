'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.DEFAULT_TEMPERATURE = 20
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.currentMaximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_OFF;
    this.powerSavingMode = true;
  };

  getCurrentTemperature() {
    return this.temperature
  };

  getIsPowerSavingModeOn() {
    return this.powerSavingMode === true;
  };

  up(amount) {
    let max_temp_error = "Temperature can't be higher than 32 if PSM is off"
    let power_save_max_temp_error = "Temperature can't be higher than 25 if PSM is on"
    if (this.powerSavingMode === true) {
      if (this.temperature + amount > this.MAXIMUM_TEMPERATURE_PSM_ON) {
        throw new TypeError(power_save_max_temp_error)
      } else {
        this.temperature += amount
      }
    } else {
      if (this.temperature + amount > this.MAXIMUM_TEMPERATURE_PSM_OFF) {
        throw new TypeError(max_temp_error)
      } else {
        this.temperature += amount
      }
    }
  }

  togglePowerMode() {
    if (this.powerSavingMode === true) {
      this.powerSavingMode === false
    } else {
      this.powerSavingMode === true
    }
  }

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

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE
  }

  energyUsage() {
    if (this.temperature <=18) {
      return "Low"
    } else if (this.temperature > 18 && this.temperature <= 25) {
      return "Medium"
    } else {
      return "High"
    }
  }


};
