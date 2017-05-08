const axios = require('axios')
const prompt = require('prompt')

axios.post('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDEJh3JYDQ0cJE4-v-Srd9y2kjPVcA3mhE', {
  "request": {
    "slice": [
      {
        "origin": "BNE",
        "destination": "NRT",
        "date": "2017-10-01"
      }
    ],
    "passengers": {
      "adultCount": 1,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "childCount": 0,
      "seniorCount": 0
    },
    "solutions": 1,
    "refundable": false
  }
})
.then(function(response) {
  //console.log(response["data"]["trips"]["tripOption"][0]["pricing"]);
  console.log('From:', response["data"]["trips"]["data"]["airport"][0]["name"]);
  console.log('To:', response["data"]["trips"]["data"]["airport"][1]["name"]);
  console.log('Carrier:', response["data"]["trips"]["data"]["carrier"][0]["name"]);
  console.log('Equipment Type:', response["data"]["trips"]["data"]["aircraft"][0]["name"]);
  console.log('Price:', response["data"]["trips"]["tripOption"][0]["saleTotal"]);
})
.catch(function(error) {
  console.log(error);
});