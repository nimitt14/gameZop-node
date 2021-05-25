const amqp = require('amqplib');
const config = require("../config")

let client;

async function getAmqp () {
    if(!client)
        client = await amqp.connect(config.amqp.url)
    return client
}

module.exports = getAmqp;