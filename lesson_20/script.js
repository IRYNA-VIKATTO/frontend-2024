// Асинхронная функция для получения данных о погоде
async function getWeather() {
    // 1. Получаем данные о местоположении (город, широта, долгота)
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await res.json();
    const { city, latitude, longitude } = data;

    // 2. Запрашиваем данные о погоде
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    // Деструктурируем необходимые данные о погоде
    const { temperature, windspeed, weathercode } = weatherData.current_weather;
    const { temperature: temperatureUnit, windspeed: windspeedUnit } = weatherData.current_weather_units;

    // 3. Функция для расшифровки кода погоды
    const decodeWeatherCode = (code) => {
        const weatherCodes = {
            0: "clear.jpg",        // Ясно
            1: "partly_cloudy.jpg", // Малооблачно
            2: "cloudy.jpg",        // Облачно
            3: "overcast.jpg",      // Переменная облачность
            45: "fog.jpg",          // Туман
            48: "ice_fog.jpg",      // Ледяной туман
            51: "light_rain.jpg",   // Легкий дождь
            53: "moderate_rain.jpg",// Умеренный дождь
            55: "heavy_rain.jpg",   // Сильный дождь
            56: "light_ice_rain.jpg", // Легкий дождь со льдом
            57: "heavy_ice_rain.jpg", // Сильный дождь со льдом
            61: "light_thunderstorm.jpg", // Легкий дождь с грозой
            63: "moderate_thunderstorm.jpg", // Умеренный дождь с грозой
            65: "heavy_thunderstorm.jpg", // Сильный дождь с грозой
            71: "light_snow.jpg",    // Легкий снег
            73: "moderate_snow.jpg", // Умеренный снег
            75: "heavy_snow.jpg",    // Сильный снег
            77: "rain_thunderstorm.jpg",  // Дождь с грозой
            80: "heavy_rain.jpg",    // Сильный дождь
            81: "moderate_thunderstorm.jpg", // Умеренный дождь с грозой
            82: "light_snow_rain.jpg" // Легкий снег с дождем
        };

        return weatherCodes[code] || "default.jpg"; // Возвращаем картинку по коду погоды
    };

    // 4. Устанавливаем фоновое изображение на основе кода погоды
    const weatherDescription = decodeWeatherCode(weathercode);
  
    // Логируем путь к изображению для отладки
    console.log("Путь к изображению:", `images/${weatherDescription}`);
  
    
    // Обновляем фоновое изображение на странице
    document.body.style.backgroundImage = `url('images/${weatherDescription}')`;  // Устанавливаем фоновое изображение

    console.log(`Город: ${city}`);
    console.log(`Широта: ${latitude}, Долгота: ${longitude}`);
    console.log(`Температура: ${temperature} ${temperatureUnit}`);
    console.log(`Скорость ветра: ${windspeed} ${windspeedUnit}`);
    console.log(`Погода: ${weatherDescription}`);

    // Выводим данные на страницу
    document.getElementById("city").textContent = `Город: ${city}`;
    document.getElementById("latitude").textContent = `Широта: ${latitude}`;
    document.getElementById("longitude").textContent = `Долгота: ${longitude}`;
    document.getElementById("temperature").textContent = `Температура: ${temperature} ${temperatureUnit}`;
    document.getElementById("windspeed").textContent = `Скорость ветра: ${windspeed} ${windspeedUnit}`;
    document.getElementById("weather").textContent = `Погода: ${weatherDescription}`;
}

// Вызываем функцию
getWeather();