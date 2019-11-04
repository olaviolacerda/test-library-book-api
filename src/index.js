const app = require('./app');
const { httpPort } = require('./env');

app.listen(httpPort);
