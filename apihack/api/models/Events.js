/**
* Events.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: { type: 'string' },
  	place: { model: 'Places' },
  	initialTime: { type: 'datetime' },
  	finishTime: { type: 'datetime' },
  	activities: {
  		collection: 'Activities',
  		via: 'event'
  	},
  	organization: { model: 'Organizations' }
  }
};

