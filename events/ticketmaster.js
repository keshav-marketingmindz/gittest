var rp = require('request-promise')
var utils = require('./utils')

const TM_API_KEY = 'jY1jU81GAEnBRnzPkGcn5AuGrA1auH2S'

// url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=jY1jU81GAEnBRnzPkGcn5AuGrA1auH2S",

var ticketMaster = {
  getBaseEvents: function () {
    var urlQp = {
      apikey: TM_API_KEY,
      city: 'San Francisco',
      classificationName: 'sports', // music, sports
      radius: 25,
      unit: 'miles',
      page: 1,
      size: 5
    }
    var apiEp = utils.genUrl('https://app.ticketmaster.com/discovery/v2/events.json', urlQp)
    console.log('EP Called = ', apiEp)
    rp(apiEp, {'json': true}).then(function (response) {
      response._embedded.events.forEach(function (event) {
        console.log('Name:', event.name)
        if(event.dates.start) console.log('Start DateTime:', event.dates.start.dateTime)
        if(event.dates.end) console.log('End DateTime:', event.dates.end.dateTime)
        console.log('Image:', event.images[0].url)
        if(event.info) console.log('Desc:', event.info)
        console.log('Category:', event.classifications)
        if(event.priceRanges) console.log('Price:', event.priceRanges)
        if(event._embedded.venue) console.log('Address:', event._embedded.venue.address)
        console.log('---X---X---')
      })
      console.log('Response Page Data = ', response['page'])
    }).catch(function (err) {
      console.log('Error Occurred!')
    })
  }
}

module.exports = ticketMaster
