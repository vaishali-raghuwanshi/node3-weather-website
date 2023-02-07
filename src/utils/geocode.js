const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=fab9dec22a1f3e44edf2c690deb3e2c3&query=' + encodeURIComponent(address);

    request({url:url, json:true}, (error, {body}={})=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, {
                latitude : body.data[0].latitude,
                longitude : body.data[0].longitude,
                location : body.data[0].name + ' ' + body.data[0].country
            })
        }
    })
}

module.exports = geocode 