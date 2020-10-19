const fetch = require('node-fetch');
const config = require('config');

const HOST = config.get('server.host');
const PORT = config.get('server.port');

async function keepAlive() {
  await fetch(`${HOST}:${PORT}/_status`);
}

module.exports = {
  f: keepAlive,
  interval: 30 * 1000, // 30s
};
