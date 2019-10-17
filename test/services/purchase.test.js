const assert = require('assert');
const app = require('../../src/app');

describe('\'purchase\' service', () => {
  it('registered the service', () => {
    const service = app.service('purchase');

    assert.ok(service, 'Registered the service');
  });
});
