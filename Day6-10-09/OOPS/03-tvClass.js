// Base Class
class TV {
  constructor(
    _brand,
    _channel = 1,
    _price,
    _inches,
    _onOffStatus,
    _volume = 50
  ) {
    this.brand = _brand;
    this.channel = _channel;
    this.price = _price;
    this.inches = _inches;
    this.onOffStatus = _onOffStatus;
    this.volume = _volume;
  }

  increaseVolume() {
    if (this.volume >= 0 && this.volume <= 100) {
      this.volume += 1;
    }
    console.log('New Volume', this.volume);
  }

  setChannel() {
    if (this.channel >= 0 && this.channel <= 50) {
      this.channel += 1;
    }
    console.log('New Channel', this.channel);
  }
  resetTV() {
    this.channel = 1;
    this.volume = 50;
  }

  status() {
    console.log('${this.brand} at ${this.channel}, volume {this.volume}');
  }
}

// Child Class
class LED extends TV {
  constructor(
    _screenThickness,
    _energyUsage,
    _lifeSpan,
    _refreshRate,
    _viewingAngle,
    _backLight,
    _displayDetails
  ) {
    this.screenThickness = _screenThickness;
    this.energyUsage = _energyUsage;
    this.lifeSpan = _lifeSpan;
    this.refreshRate = _refreshRate;
    this.viewingAngle = _viewingAngle;
    this.backlight = _backLight;
    this.displayDetails = _displayDetails;
  }
}

//  Child Class
class Plasma extends TV {
  constructor(
    _screenThickness,
    _energyUsage,
    _lifeSpan,
    _refreshRate,
    _viewingAngle,
    _backLight,
    _displayDetails
  ) {
    this.screenThickness = _screenThickness;
    this.energyUsage = _energyUsage;
    this.lifeSpan = _lifeSpan;
    this.refreshRate = _refreshRate;
    this.viewingAngle = _viewingAngle;
    this.backlight = _backLight;
    this.displayDetails = _displayDetails;
  }
}
