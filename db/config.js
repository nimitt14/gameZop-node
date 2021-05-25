module.exports = {

    postgres: {
        URL: "postgres://oolsmnbq:5DrtY2BTpCdw2pmGH7MFs3DvfdhK0_vG@batyr.db.elephantsql.com/oolsmnbq",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    redis: {
        port: 19115, // Redis port
        host: "redis-19115.c14.us-east-1-3.ec2.cloud.redislabs.com", // Redis host
        password: "fJPvOIHVwxArsbwyHDfND8x9HuAxuK9d",
        db: 0,
    },
    amqp: {
        url: "amqps://nmvgccnx:3FTTOuT2OGx9L9MJcpLVWDtVJIW9al9g@baboon.rmq.cloudamqp.com/nmvgccnx"
    }
};