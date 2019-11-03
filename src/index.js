const app = require('./app');
const { httpPort } = require('./env');

app.listen(httpPort, () => { console.log(`App running on port ${httpPort}`); });
