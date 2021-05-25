module.exports = (redis) => {

    async function getByKey(key) {
        return redis.get(key).then(res=>JSON.parse(res));
    }
    async function deleteByKey(key){
        return redis.del(key);
    }
    return {getByKey,deleteByKey};
};


