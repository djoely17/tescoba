const assert = require('assert');
const app = require('../../src/app');

describe('\'sales\' service', () => {
  it('registered the service', () => {
    const service = app.service('sales');

    assert.ok(service, 'Registered the service');
  });
});
