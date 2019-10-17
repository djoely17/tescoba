// Initializes the `distributors` service on path `/distributors`
const { Distributors } = require('./distributors.class');
const createModel = require('../../models/distributors.model');
const hooks = require('./distributors.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/distributors', new Distributors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('distributors');

  service.hooks(hooks);
};
