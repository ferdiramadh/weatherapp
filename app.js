var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var loc = document.querySelector('.loc');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var dateDisplay = document.querySelector('.dateDisplay');
var timeDisplay = document.querySelector('.timeDisplay');
var descDetail = document.querySelector('.descDetail');
var d = new Date()
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
let time = d.toUTCString();
	minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes();
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
    ampm = d.getHours() >= 12 ? 'pm' : 'am';

dateDisplay.innerHTML = day +','+' ' + date + ' ' + month + ' ' + year;
timeDisplay.innerHTML = hours+':'+ minutes + ' ' + ampm;


button.addEventListener('click', function(){
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&APPID=4651d463e4b32b3eddea5986388d21ce')
	.then(response => response.json())
	.then(data => {
		var nameValue = data['name'];
		var tempValue = Math.round(data['main']['temp']);
		var descValue = data['weather'][0]['main'];
		var descValueDetail = data['weather'][0]['description'];


		loc.innerHTML = nameValue;
		temp.innerHTML = tempValue + '<span>&deg;</span>C';
		desc.innerHTML = descValue;
		descDetail.innerHTML = '<span>"</span>' + descValueDetail + '<span>"</span>' ;

		if ( descValue === "Clouds"){
			document.getElementById("test").className = "clouds";
		}else if (descValue === "Rain") {
			document.getElementById("test").className = "rain";
		}else if (descValue === "Haze" || descValue === "Mist" || descValue === "Fog" ) {
			document.getElementById("test").className = "haze";
		}else if (descValue === "Clear") {
			document.getElementById("test").className = "clear";
		}else if (descValue === "Snow") {
			document.getElementById("test").className = "snow";
		}


	})


.catch(err => alert("Wrong City !"))



})



console.log(hours+' '+ minutes + ' ' + ampm)