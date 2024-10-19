const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'datathon',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

