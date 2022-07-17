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
                if (res[years[i]]==null) {
                    res[years[i]] = 0
                }
                res[years[i]]++
            }
            console.log(res)

            let beerxYearMap = new Map(Object.entries(res))
            setBeersByYear(beerxYearMap)
        })
        .catch(console.error)
}

setBeersByYear = (m) => {
    var bxy = document.getElementById("myBarChart")
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
    })
}

getStatisticsByBeer = () => {
    fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(beersCatalog => {
            let abvs = []
            let ibus = []
            let atts = []
            let beerNames = []
            let beerImages = []
            beersCatalog.forEach(beer => {
                abvs.push(beer.abv)
                ibus.push(beer.ibu)
                atts.push(beer.attenuation_level)
                beerNames.push(beer.name)
                beerImages.push(beer.image_url)
            })

            for (let n of beerNames) {
                let i = beerNames.indexOf(n)
                const tmp = `<option value="${abvs[i]},${ibus[i]},${atts[i]}">${n}</option>`
                document.querySelector('#myBeerFilter').innerHTML += tmp
            }
            let filterSelector = document.querySelector('#myBeerFilter')
            var idk = setStatisticsByBeer([abvs[0], ibus[0], atts[0]])
            document.getElementById('beerImage').setAttribute('src',beerImages[0])
            filterSelector.addEventListener('change', event => {
                const n = (filterSelector.options[filterSelector.selectedIndex].text)
                document.getElementById('beerImage').setAttribute('src',beerImages[beerNames.indexOf(n)])
                let stats = event.target.value.split(",")
                updateData(idk, stats)
            })

        })
        .catch(console.error)
}

setStatisticsByBeer = (m) => {
    var ctx = document.getElementById("myPieChart").getContext("2d")
    const tagsColor = []
    for (let i = 0; i < m.length; i++) {
        tagsColor.push('#' + Math.floor(Math.random() * 16777215).toString(16))
    }
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Alcohol By Volume', 'International Bittering Unit', 'Attenuation Level'],
            datasets: [{
                data: m,
                backgroundColor: tagsColor,
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
    })
    return myPieChart
}

updateData = (chart, data) => {
    chart.data.datasets[0].data = data
    chart.update()
}

animateStuff = (e,a) => {
    const anim = document.querySelector(e)
    anim.classList.add('animate__animated', a)
}

window.addEventListener('DOMContentLoaded', (event) => {
    getBeersByYear()
    getStatisticsByBeer()
    animateStuff('.chart-area', 'animate__bounceIn')
    animateStuff('.chart-pie','animate__bounceIn')
    animateStuff('#beerImage','animate__bounceIn')
    animateStuff('.form-select','animate__bounceIn')
})