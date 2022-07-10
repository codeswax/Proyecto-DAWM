getBeersByYear = () => {
    fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(beersCatalog => {
            let years = []
            let res = {}
            beersCatalog.forEach(beer => {
                let brewedYear = beer.first_brewed.split("/")[1]
                years.push(brewedYear)
            })

            for (let i = 0; i < years.length; ++i) {
                if (!res[years[i]]) {
                    res[years[i]] = 0
                }
                ++res[years[i]];
            }

            let beerxYearMap = new Map(Object.entries(res))
            setBeersByYear(beerxYearMap)
        })
        .catch(console.error)
}

setBeersByYear = (m) => {
    var bxy = document.getElementById("myBarChart");
    var myBarChart = new Chart(bxy, {
        type: 'bar',
        data: {
            labels: Array.from(m.keys()),
            datasets: [{
                label: "Beers brewed",
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                data: Array.from(m.values()),
            }],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
            },
            legend: {
                display: false
            },
            tooltips: {
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
        }
    });
}

getStatisticsByBeer = () => {
    fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(beersCatalog => {
            let abvs = []
            let ibus = []
            let atts = []
            let beerNames = []
            
            beersCatalog.forEach(beer => {
                abvs.push(beer.abv)
                ibus.push(beer.ibu)
                atts.push(beer.attenuation_level)
                beerNames.push(beer.name)
            })

            for (let n of beerNames) {
                let i = beerNames.indexOf(n)
                const tmp = `<option value="${abvs[i]},${ibus[i]},${atts[i]}">${n}</option>`
                document.querySelector('#myBeerFilter').innerHTML += tmp
            }
            let filterSelector = document.querySelector('#myBeerFilter')

            var idk = setStatisticsByBeer([abvs[0],ibus[0],atts[0]])

            filterSelector.addEventListener('change', event => {
                let stats = event.target.value.split(",")
                updateData(idk,stats)
                console.log(event.target.value)
            })

        })
        .catch(console.error)
}

setStatisticsByBeer = (arr) => {
    var ctx = document.getElementById("myPieChart").getContext("2d")
    let hexColors = []
    for (let i = 0; i < arr.length; i++) {
        hexColors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Alcohol By Volume', 'International Bittering Unit', 'Attenuation Level'],
            datasets: [{
                data: arr,
                backgroundColor: hexColors,
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    });
    return myPieChart
}

updateData = (chart, arr) => {
    chart.data.datasets[0].data = arr
    chart.update()
}

/*
getMaxAndMinA = () => {
    fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(beersCatalog => {

            let beerNames = []
            let beerPhs = []
            let beerAttenuation = []

            beersCatalog.forEach(beer => {
                beerNames.push(beer.name)
                beerAttenuation.push(beer.attenuation_level)
            })

            let maxAtt = Math.max(...beerAttenuation)
            let minAtt = Math.min(...beerAttenuation)

            console.log(beerNames[beerAttenuation.indexOf(maxAtt)])
            console.log(beerNames[beerAttenuation.indexOf(minAtt)])
        })
        .catch(console.error)
    }
*/


window.addEventListener('DOMContentLoaded', (event) => {
    getBeersByYear()
    getStatisticsByBeer()
});