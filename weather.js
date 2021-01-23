class Weather {
  constructor(city) {
    this.apiKey = '33a51ddd3e6010d64d873410d2bc9b76';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}, {this.country}&appid=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
