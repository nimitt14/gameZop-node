async function initializeEventQueue(amqp, psqlRepo, redisRepo) {
    const channel = await amqp.createChannel()
    const queue = "hello";

    await channel.assertQueue(queue, {
        durable: false
    });

    channel.consume(queue, async function(msg) {
        try{
            const key = msg.content.toString()
            console.log(" Received %s", msg.content.toString());
            const data = await redisRepo.getByKey(key);
            console.log("data = ", typeof data);
            await psqlRepo.create(data);
            await redisRepo.deleteByKey(key);
        }
        catch (err) {
            console.error(err);
        }
    }, {
        noAck: true
    });
}

module.exports = initializeEventQueue;