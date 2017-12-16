const Loki = require("lokijs");

const db = new Loki('demo.json');
const users = db.addCollection('users');
const events = db.addCollection('events');
const calendar = db.addCollection('calendar');

module.exports = db;