const amqp = require("./db/connections/amqp")
const psql = require("./db/connections/psql")
const redis = require("./db/connections/redis")
const TodoPsqlRepo = require("./db/models/detail")
const TodoRedisRepo = require("./db/models/todoRedisRepo")
const EventQueue = require("./modules/eventQueue")
const httpServer = require("./delivery/http/server")

async function main() {
   try {
    const amqpClient = await amqp();
    const todoPsqlRepo = await TodoPsqlRepo(psql.sequelize, psql.Sequelize); 
    const todoRedisRepo = TodoRedisRepo(redis);
    await EventQueue (amqpClient, todoPsqlRepo, todoRedisRepo);
    httpServer(todoPsqlRepo);
    console.info("Intialization successful");
   }
   catch (err) {
       console.error(err);
   }
}

main();
