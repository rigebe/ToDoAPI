const { Sequelize } = require('../models');
const models = require('../models/index')
const Joi = require('hapi/node_modules/joi');

async function get_tasks(request, h) {
    try {
      let tasks = await models.Task.findAll({order: [['number', 'asc']]});
      return tasks;
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  async function post_task(request, h) {
    try {
      await models.Task.create(request.payload);
      return h.response(request.payload).code(200);
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  async function set_task_status(request, h) {
    try {
      const task = await models.Task.findOne({where: {id: request.params.id}})
      task.status = request.payload.status;
      task.save();
      return task;
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  async function set_task_number(request, h) {
    try {
      const task = await models.Task.findOne({where: {id: request.params.id}})
      task.number = request.payload.number;
      task.save();
      return task;
    } 
    catch(e) {
      console.log(e.name + ' ' + e.message);
    }
  }

  module.exports = [{
    method: 'GET',
    path: '/tasks',
    options: { 
      handler: get_tasks
    }
  },{
    method: 'POST',
    path: '/tasks',
    options: { 
      handler: post_task, 
      validate: {
        payload: {
          text: Joi.string().min(1).max(50).required(),
          status: Joi.boolean().required(),
          number: Joi.number().integer().required(),
          list_id: Joi.number().integer().required()
        }
      }
    }
  },
  {
    method: ['PUT','PUTCH'],
    path: '/tasks/status/{id}',
    options: { 
      handler: set_task_status,
      validate: {
        payload: {
          status: Joi.boolean().required()
        }
      }
    }
  },
  {
    method: ['PUT','PUTCH'],
    path: '/tasks/number/{id}',
    options: { 
      handler: set_task_number,
      validate: {
        payload: {
          number: Joi.number().integer().required()
        }
      }
    }
  }];