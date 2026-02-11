class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.feels = document.getElementById('w-feels');
    this.minmax = document.getElementById('w-minmax');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
    this.pressure = document.getElementById('w-pressure');
    this.visibility = document.getElementById('w-visibility');
    this.clouds = document.getElementById('w-clouds');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
  }

  paint(weather) {
    // Handle error responses
    if (!weather || weather.cod !== 200) {
      this.location.textContent = 'Location not found';
      this.desc.textContent = weather?.message || 'Please try another city';
      this.string.textContent = '';
      this.icon.setAttribute('src', '');
      this.icon.setAttribute('alt', '');
      this.feels.textContent = '';
      this.minmax.textContent = '';
      this.humidity.textContent = '';
      this.wind.textContent = '';
      this.pressure.textContent = '';
      this.visibility.textContent = '';
      this.clouds.textContent = '';
      this.sunrise.textContent = '';
      this.sunset.textContent = '';
      return;
    }

    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${Math.round(weather.main.temp)}°C`;
    this.icon.setAttribute(
      'src',
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.icon.setAttribute('alt', weather.weather[0].description);
    
    this.feels.textContent = `Feels like ${Math.round(weather.main.feels_like)}°C`;
    this.minmax.textContent = `${Math.round(weather.main.temp_min)}° / ${Math.round(weather.main.temp_max)}°`;
    this.humidity.textContent = `${weather.main.humidity}%`;
    this.wind.textContent = `${weather.wind.speed} m/s`;
    this.pressure.textContent = `${weather.main.pressure} hPa`;
    this.visibility.textContent = `${(weather.visibility / 1000).toFixed(1)} km`;
    this.clouds.textContent = `${weather.clouds.all}%`;
    this.sunrise.textContent = this.formatTime(weather.sys.sunrise, weather.timezone);
    this.sunset.textContent = this.formatTime(weather.sys.sunset, weather.timezone);
  }

  formatTime(timestamp, timezone) {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC'
    });
  }
}
