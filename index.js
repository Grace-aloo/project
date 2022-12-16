const data = 'https://api.breezometer.com/air-quality/v2/current-conditions?lat=-1.292066&lon=36.821945&key=1005c63481784761ad527957bb065629&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information'
document.addEventListener("DOMContentLoaded",() => {
    const login = document.getElementById('login');
    const form = document.getElementById('formDiv');
    const home = document.getElementById('home');
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    form.addEventListener('submit',(e) => {
        e.preventDefault();
        form.reset();
        
    })
    home.addEventListener('click', () => {

    })
    login.addEventListener('click',() => {
        home.style.display = "none";
        // header.style.display = "none";
        footer.style.display = "none";
        form.removeAttribute('hidden');

    })
    function getTime(myData){
        const infom = document.createElement('div')
        infom.classList.add('card-container')

        const head =document.createElement('h3')
        head.innerHTML = 'The Air quality'

        const paragraph = document.createElement('p')
        paragraph.innerHTML = `<b>Date and time</b> ${myData.datetime}.<br>
        <b>index</b>: ${myData.indexes.baqi.display_name}<br>
        <b>AQI</b>: ${myData.indexes.baqi.aqi_display}<br>
        <b>dominant pollutant</b> : ${myData.indexes.baqi.dominant_pollutant}<br>
        <b>Air quality category</b> : ${myData.indexes.baqi.category}`

        infom.appendChild(head)
        infom.append(paragraph)
        const me = document.getElementById("wewe")
        me.append(infom)
        return me;
    }
    function getPollutants(myData){
        const meData = myData.pollutants
        const one = document.createElement('div')
        one.innerHTML = `<h3>${meData.co.full_name}</h3>
        <b>Concentration</b> ${meData.co.concentration.value}${meData.co.concentration.units}<br>
        <b>AQI</b> ${meData.co.aqi_information.baqi.aqi_display}<br>
        <b>Category</b> ${meData.co.aqi_information.baqi.category}<br>
        <b>Sources</b><br>${meData.co.sources_and_effects.sources}<br>
        <b>Effects</b><br> ${meData.co.sources_and_effects.effects}`

        const two = document.createElement('div')
        two.innerHTML =  `<h3>${meData.no2.full_name}</h3>
        <b>Concentration</b>: ${meData.no2.concentration.value}${meData.co.concentration.units}<br>
        <b>AQI</b>: ${meData.no2.aqi_information.baqi.aqi_display}<br>
        <b>Category</b>: ${meData.no2.aqi_information.baqi.category}<br>
        <b>Sources</b><br> ${meData.no2.sources_and_effects.sources}<br>
        <b>Effects</b><br> ${meData.no2.sources_and_effects.effects}`
        
        const three = document.createElement('div')
        three.innerHTML =  `<h3>${meData.o3.full_name}</h3>
        <b>Concentration</b>: ${meData.o3.concentration.value}${meData.co.concentration.units}<br>
        <b>AQI</b>: ${meData.o3.aqi_information.baqi.aqi_display}<br>
        <b>Category</b>: ${meData.o3.aqi_information.baqi.category}<br>
        <b>Sources</b> <br>${meData.o3.sources_and_effects.sources}<br>
        <b>Effects</b><br>${meData.o3.sources_and_effects.effects}`

        const ten = document.getElementById('pollutants')
        ten.append(one)
        ten.append(two)
        ten.append(three)

    }
    const getData = () => {
        fetch(data)
        .then(res => res.json())
        .then(data => {
            let myData = data.data
            console.log(myData)
            getTime(myData)
            getPollutants(myData)
        })
    }
    getData()
})
