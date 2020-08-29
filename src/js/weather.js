export default function searchWeather(searchLocation) {
  const weatherAPIKey = '73a59a89629b4bc6b41132012200206';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&days=3&q=${searchLocation}`;
  return fetch(url)
    .then((res) => res.json());
}
