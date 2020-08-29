export default function getLocation() {
  const geolocationAPIKey = '72cbb95d2225ea';
  const url = `https://ipinfo.io/json?token=${geolocationAPIKey}`;
  return fetch(url)
    .then((res) => res.json())
}
