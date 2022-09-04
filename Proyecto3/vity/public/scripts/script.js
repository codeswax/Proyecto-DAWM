let cargarDatos = () => {
    document.querySelector('#form-select').addEventListener('change', e => {
        document.querySelector('tbody').innerHTML = ''
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});