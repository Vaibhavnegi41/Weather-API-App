const submitButton=document.getElementById('submit');
const apiKey="af8f538e3188f15fa599a44dc7f452ae";
const body=document.querySelector('body');

submitButton.addEventListener('click',()=>{
    const city=document.getElementById('cityname').value;
    const weather=document.querySelector('.footer');
    if(!city){
        alert("please enter the city name for weather details !");
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response)=>{
        
        let r=response.json();
        return r;
    }).then((data)=>{
        if(data.cod==="404"){
            alert("city not found ");
            return;
        }
        
        const temp=data.main.temp;
        const humidity=data.main.humidity;
        const speed=data.wind.speed;
        const description=data.weather[0].main;
        const feels_like=data.main.feels_like;

        weather.style.display="block";
        body.style.display="flex";
        body.style.justifyContent="center";
        body.style.alignItems="center";


        weather.innerHTML=`
        <h1>${city}</h1>
        <div class="temp">${temp}°C</div>
        <div class="desp">${description}</div>
        <div class="details"> 
        <div class="humidity">Humidity :<br> ${humidity}%</div>
         <div class="speed">Wind Speed : <br>${speed} m/s</div>
         <div class="speed">Feels Like : <br>${feels_like}°C</div>
        </div>
        `
    })
    
})
