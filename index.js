var inputLocation = document.getElementById('searchBar');
var buttomSubmit =  document.getElementById('.btn');
var locationValue =  document.getElementById('.location');
var descValue =  document.getElementById('.desc'); 
var tempValue =  document.getElementById('.temp');
 btn.addEventListener('click' , function(){
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchBar.value+'&appid=1e8ad8209fb1c5d934f4f0355f92f807')
     .then(response => response.json())
     .then(data =>{
         var locationDisplay = data['searchBar'];
         var tempDisplay = data['main']['temp'];
         var descDisplay = data['weather'][0]['description'];
        

         searchBar.value.innerHTML =locationDisplay;
         temp.innerHTML ='<br>'+'Temperature'+'&nbsp;'+':'+'&nbsp;'+tempDisplay;
         desc.innerHTML = '<br>'+'Description'+'&nbsp;'+':'+'&nbsp;'+ descDisplay;

     })
    })