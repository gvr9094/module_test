var inputLocation = document.getElementById('searchBar');
var buttomSubmit =  document.getElementById('.btn');
var cityValue =  document.getElementById('city');
var descValue =  document.getElementById('desc'); 
var tempValue =  document.getElementById('temp');
var humValue =  document.getElementById('humidity');
var pressValue =  document.getElementById('pressure');
var countryValue =  document.getElementById('country');
 btn.addEventListener('click' , function(){
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchBar.value+'&appid=1e8ad8209fb1c5d934f4f0355f92f807')
     .then(response => response.json())
     .then(data =>{
     
         var cityDisplay = data['name'];
         var tempDisplay = data['main']['temp'];
         var descDisplay = data['weather'][0]['description'];
         var humidityDisplay = data['main']['humidity'];
         var pressureDisplay = data['main']['pressure'];
         var countryDisplay = data['sys']['country'];



         humidity.innerHTML = '<br>'+'Humidity'+'&nbsp;'+':'+'&nbsp;'+humidityDisplay;
         pressure.innerHTML = '<br>'+'Pressure'+'&nbsp;'+':'+'&nbsp;'+pressureDisplay;
         city.innerHTML = cityDisplay;
         country.innerHTML ='<br>'+'Country'+'&nbsp;'+':'+'&nbsp;'+countryDisplay;
         temp.innerHTML ='<br>'+'Temperature'+'&nbsp;'+':'+'&nbsp;'+tempDisplay;
         desc.innerHTML = '<br>'+'Description'+'&nbsp;'+':'+'&nbsp;'+ descDisplay;

     })
    })