//importamos axios para manejar las peticiones http


const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'dirección de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv;

/** ESTA FUE MI SOLUCIÓN AL PROBLEMA */

/* const getInfo = (direccion) => {

    lugar.getLugarLatLng(direccion).then((respuesta) => {
        const lat = respuesta.latitud;
        const long = respuesta.longitud
        console.log(`******** ${lat}---${long}*********`);
        clima.getClima(lat, long).then((respuesta) => {
            console.log(`El clima de ${direccion} es de ${respuesta} grados centigrados`);
        }).catch(console.log)

    })
} */


/** SOLUCIÓN DADA POR EL TUTOR
 */


const getInfo = async(direccion) => {

    try {

        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.latitud, coord.longitud);
        return `El clima de ${coord.address} es de ${temp} grados centigrados`;
    } catch (e) {
        return e;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);

//clima.getClima(40.71, -74.01).then(console.log).catch(console.log);
//esta función regresará una promesa ya que la pusimos con async.
//esto es lo mismo que lo siguiente
/* lugar.getLugarLatLng(argv.direccion).
then((respuesta) => {console.log(respuesta);} */
//https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await
//lugar.getLugarLatLng(argv.direccion).then((respuesta))


//Todo el contenido inferior lo vamos a mover a otro fichero -- lugar.js para que todo esté mas ordenado y 
//ya que app.js está con todo el codigo mezclado.


//console.log(argv.direccion);

/* 
const Axios = require('axios');
//const url = 'api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=b2e0c5501dd21a88498d241305e0102f'


Axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
        q: argv.direccion,
        appid: 'b2e0c5501dd21a88498d241305e0102f'
    }
}).then((respuesta) => {
    console.log(respuesta);
    //console.log(respuesta.status) Si solo quisiera el atributo status de la respuesta

}).catch((error) => {
    console.log(error);
}) */