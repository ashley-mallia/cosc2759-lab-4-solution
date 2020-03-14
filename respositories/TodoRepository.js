
const config = require('../config/Config')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
    host: config.dbHost,
    dialect: 'postgres'
});

const Todo = require('../models/Todo')(sequelize, Sequelize);

class TodoRepository {
  /**
   * @param {*} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * @param {String} name
   */
  create(name) {
    const newTodo = { name, done: false };
    // eslint-disable-next-line new-cap
    const todo = new this.model(newTodo);

    return todo.save();
  }

  findAll() {
    return this.model.fetchAll();
  }

  /**
   * @param {Integer} id
   */
  findById(id) {
    return this.model.where('id', id).fetch();
  }

  /**
   * @param {integer} id
   */
  deleteById(id) {
    return this.model.where('id',id).destroy();
  }

  /**
   *
   * @param {integer} id
   * @param {*} object
   */
  updateById(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, { $set: { name: object.name, done: object.done } });
  }
}

module.exports = new TodoRepository(Todo);
