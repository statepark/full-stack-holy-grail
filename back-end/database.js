const redis = require('redis');

const client = redis.createClient();

client.set('header', 0);
client.set('menu', 0);
client.set('content', 0);
client.set('ad', 0);
client.set('footer', 0);

//get data promise
const getData = (dataKey) => {
    const promise = new Promise((resolve, reject) => {
        client.get(dataKey, (err, value) => {
            if (err){
                reject(err);
            } else {
                resolve(value);
            }
        });
    });
    return promise;
};

//set data function
const setData = (dataKey, newValue) => {
    client.set(dataKey, newValue);
};

//node statement to export these two functions from this js file
module.exports = {
    getData,
    setData
};

//getData, is shorthand for getData: getData,
//this can be used when the key and the value in the pair are the same


//these two functions are now availbale to be consumed in index.js