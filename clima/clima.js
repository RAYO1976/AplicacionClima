const Axios = require('axios');

const getClima = async(latitud, longitud) => {

    const respuesta = await Axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: latitud,
            lon: longitud,
            units: 'metric',
            appid: 'b2e0c5501dd21a88498d241305e0102f'
        }
    })
    if ((respuesta.cod == 400) || (respuesta.cod == 404)) {
        console.log(`No hay resultados para la latidud: ${latitud} -- longitud: ${longitud}`);
    } else {
        return respuesta.data.main.temp;
    }
}

//exportamos la función
module.exports = {
    getClima
}