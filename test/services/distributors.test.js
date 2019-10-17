const assert = require('assert');
const app = require('../../src/app');

describe('\'distributors\' service', () => {
  it('registered the service', () => {
    const service = app.service('distributors');

    assert.ok(service, 'Registered the service');
  });
});
