import useFetch from "../../hooks/useFetch";

export default function WeatherWidget() {
  const { data, loading, error } = useFetch(
    "https://api.open-meteo.com/v1/forecast?latitude=19&longitude=72&current_weather=true"
  );

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <p>🌡 Temp: {data.current_weather.temperature}°C</p>
      <p>💨 Wind: {data.current_weather.windspeed} km/h</p>
    </div>
  );
}
