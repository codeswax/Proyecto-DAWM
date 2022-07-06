test = () => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(data => {
        
    })
    .catch(console.error)
}

window.addEventListener('DOMContentLoaded', (event) => {
    test()
});

