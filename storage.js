class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = 'Vienna';
    this.defaultState = 'Austria';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('country') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('country');
    }

    return {
      city: this.city,
      state: this.country,
    };
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
}
