const { Sequelize } = require('../models');
const models = require('../models/index')
const Joi = require('hapi/node_modules/joi');

async function get_lists(request, h) {
    try {
      let lists = await models.List.findAll();
      return lists;
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

async function post_list(request, h) {
    try {
      await models.List.create(request.payload);
      return h.response(request.payload).code(200);
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

module.exports = [{
    method: 'GET',
    path: '/lists',
    options: { 
      handler: get_lists
    }
  },{
    method: 'POST',
    path: '/lists',
    options: { 
      handler: post_list, 
      validate: {
        payload: {
          Name: Joi.string().min(1).max(20).required()
        }
      }
    }
  }];