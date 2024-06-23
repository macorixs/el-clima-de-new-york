


const fetchdatos = position  =>{
  const {latitudes, longitudes} = position.coords;
  


  
  
  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=new york&lang=es&units=metric&appid=5be06c03ddf35fe42dbd921c1953894f')
           



.then(Response  =>  Response.json()) 
.then(datos => setweatherdata (datos))

}

var setweatherdata = data => {
    console.log(data)

    var weatherdata = {
        location: data.name,
        description: data.weather[0].description,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp_max,
        clouds: data.clouds.all,
        wind: data.wind.speed,
        sunrise: data.sys.sunrise,  
        sunset: data.sys.sunset,  
        
    }
    
    Object.keys(weatherdata).forEach(key => {
        document.getElementById(key).textContent = weatherdata[key];
    });




  
  
  
}

const onload = () => {
  navigator.geolocation.getCurrentPosition(fetchdatos)
}

  

