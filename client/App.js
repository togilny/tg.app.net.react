import React, { useEffect, useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/weather')
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather App</h1>
      {weather ? (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Condition: {weather.condition}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
