import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}
// TODO: Define a class for the Weather object
class Weather {
  temp: number;
  wind: number;
  humidity: number;
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  baseURL: string = 'api.openweathermap.org/data/2.5/onecall?';
  APIkey: string = '64e6f2741c5e460c5d701560d3b27a65';
  cityName: string;

  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    const resp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${this.APIkey}`);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    } else {
      return resp.json();
    }
  }
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}

  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {
    const entireURL = `${this.baseURL}lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.APIkey}`
    const resp = await fetch(entireURL);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    } else {
      return resp.json();
    }
  }
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
