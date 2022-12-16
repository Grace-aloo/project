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
        const info = document.createElement('div')

        const head =document.createElement('h3')
        head.innerHTML = 'The Air quality'

        const paragraph = document.createElement('p')
        paragraph.innerHTML = `The date is ${myData.datetime}.
        The index used is ${myData.indexes.baqi.display_name}
        with a aqi of ${myData.indexes.baqi.aqi_display}.
        the dominant pollutant is ${myData.indexes.baqi.dominant_pollutant}.
        The air quality can be categozied as : ${myData.indexes.baqi.category}`

        info.appendChild(head)
        info.append(paragraph)
        const me = document.getElementById("info")
        me.append(info)
        return me;
    }
    function getPollutants(myData){
        const meData = myData.pollutants
        const one = document.createElement('div')
        one.innerHTML = `<h3>${meData.co.full_name}</h3>
        <h4>Concentration</h4> ${meData.co.concentration.value}${meData.co.concentration.units}
        <h4>AQI</h4> ${meData.co.aqi_information.baqi.aqi_display}
        <h4>Category</h4> ${meData.co.aqi_information.baqi.category}
        <h4>Sources</h4> ${meData.co.sources_and_effects.sources}
        <h4>Effects</h4> ${meData.co.sources_and_effects.effects}`

        const two = document.createElement('div')
        two.innerHTML =  `<h3>${meData.no2.full_name}</h3>
        <h4>Concentration</h4> ${meData.no2.concentration.value}${meData.co.concentration.units}
        <h4>AQI</h4> ${meData.no2.aqi_information.baqi.aqi_display}
        <h4>Category</h4> ${meData.no2.aqi_information.baqi.category}
        <h4>Sources</h4> ${meData.no2.sources_and_effects.sources}
        <h4>Effects</h4> ${meData.no2.sources_and_effects.effects}`
        
        const three = document.createElement('div')
        three.innerHTML =  `<h3>${meData.pm10.full_name}</h3>
        <h4>Concentration</h4> ${meData.pm10.concentration.value}${meData.co.concentration.units}
        <h4>AQI</h4> ${meData.pm10.aqi_information.baqi.aqi_display}
        <h4>Category</h4> ${meData.pm10.aqi_information.baqi.category}
        <h4>Sources</h4> ${meData.pm10.sources_and_effects.sources}
        <h4>Effects</h4> ${meData.pm10.sources_and_effects.effects}`

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
