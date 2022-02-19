const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    //the name of the service for redis
    host: 'redis-server',
    //default redis port
    port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
    // force shutdown for testing purposes
    // process.exit(3);
    client.get('visits', (err, visits) => {
        res.send('Number of visits: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
})