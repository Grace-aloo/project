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
        const me = document.getElementById("wee")
        me.append(info)
        return me;
    }
    const getData = () => {
        fetch(data)
        .then(res => res.json())
        .then(data => {
            let myData = data.data
            console.log(myData)
            getTime(myData)
        })
    }
    getData()
})
