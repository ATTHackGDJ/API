/**
* Activities.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: { type: 'string' },
  	initialTime: { type: 'datetime' },
  	finishTime: { type: 'datetime' },
  	description: { type: 'string' },
  	event: { model: 'Events' },
  	room: { model: 'Rooms' }
  }
};

