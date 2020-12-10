const Axios = require('axios');
//const url = 'api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=b2e0c5501dd21a88498d241305e0102f'

//recordemos que es similar a poner function getLugarLatLng(direccion) {}
//vamos a usar el concepto de async / await para hacerla asíncrona

const getLugarLatLng = async(direccion) => {

    const respuesta = await Axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: direccion,
            appid: 'b2e0c5501dd21a88498d241305e0102f'
        }
    })
    if ((respuesta.cod == 400) || (respuesta.cod == 404)) {
        console.log(`No hay resultados para la ${direccion}`);
    } else {
        const address = respuesta.data.name;
        const latitud = respuesta.data.coord.lat;
        const longitud = respuesta.data.coord.lon;
        return {
            address,
            latitud,
            longitud
        }
    }
    /*     return {
            direccion,
            latitud,
            longitud
        } */
}

//exportamos la función
module.exports = {
    getLugarLatLng
}



/*         await Axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: direccion,
                appid: 'b2e0c5501dd21a88498d241305e0102f'
            }
        }).then((respuesta) => {
            console.log(respuesta);
            //console.log(respuesta.status) Si solo quisiera el atributo status de la respuesta

        }).catch((error) => {
            console.log(error);
        }) */

/* 
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
})  */