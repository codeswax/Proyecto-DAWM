let cargarDatos = () => {
    document.querySelector('#form-select').addEventListener('change', e => {
        document.querySelector('idk').innerHTML = ''
        console.log(target.value)
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});