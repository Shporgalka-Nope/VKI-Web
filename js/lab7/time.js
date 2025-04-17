const tableTitles = document.getElementById('tb-head');
const minTemps = document.getElementById('tb-body-row1');
const maxTemps = document.getElementById('tb-body-row2');

fetch('https://api.open-meteo.com/v1/forecast?latitude=55.0415&longitude=82.9346&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=3')
    .then((responce) => {
        if(responce.ok) {
            return responce.json();
        } else {
            console.log("RESPONSE IS FUCKED UP");
        }
    })
    .then(data => {
            //Reading headers
            data.daily.time.forEach(element => {
                console.log(element);
                let createdElement = document.createElement('th');
                createdElement.innerText = element;
                createdElement.className = 'rubik-font';
                tableTitles.appendChild(createdElement);
            });

            //Reading data 1st row (min temps)
            data.daily.temperature_2m_min.forEach(element => {
                console.log(element);
                let createdElement = document.createElement('td');
                createdElement.innerText = `${element} ${data.daily_units.temperature_2m_min}`;
                createdElement.className = 'rubik-font';
                minTemps.appendChild(createdElement);
            });

            //Reading data 2nd row (max temps)
            data.daily.temperature_2m_max.forEach(element => {
                console.log(element);
                let createdElement = document.createElement('td');
                createdElement.innerText = `${element} ${data.daily_units.temperature_2m_max}`;
                createdElement.className = 'rubik-font';
                maxTemps.appendChild(createdElement);
            });
    })