const { authenticate } = require('@feathersjs/authentication').hooks;
const { populate } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [ 
      authenticate('jwt')
    ],
    find: [],
    get: [],
    create: [
      context => {
        if(context.data.product_name.trim() === '') {
          throw new Error("Product's Name can not be empty");
        }
        if(context.data.distributor.trim() === '') {
          throw new Error("Product's Distributor can not be empty");
        }
        if(context.data.price.trim() === '' || context.data.price.trim() === '0') {
          throw new Error("Product's Price can not be 0 or empty");
        }
      }
    ],
    update: [
      context => {
        if(context.data.product_name.trim() === '') {
          throw new Error("Product's Name can not be empty");
        }
        if(context.data.distributor.trim() === '') {
          throw new Error("Product's Distributor can not be empty");
        }
        if(context.data.price.trim() === '' || context.data.price.trim() === '0') {
          throw new Error("Product's Price can not be 0 or empty");
        }
      }
    ],
    patch: [
      context => {
        if(context.data.product_name.trim() === '') {
          throw new Error("Product's Name can not be empty");
        }
        if(context.data.distributor.trim() === '') {
          throw new Error("Product's Distributor can not be empty");
        }
        if(context.data.price.trim() === '' || context.data.price.trim() === '0') {
          throw new Error("Product's Price can not be 0 or empty");
        }
      }
    ],
    remove: []
  },

  after: {
    all: [
      populate({
        schema: {
          include: [
            {
              service: 'distributors',
              nameAs: 'distributor',
              parentField: 'distributor',
              childField: '_id'
            },
            {
              service: 'purchase',
              nameAs: 'purchase',
              parentField: '_id',
              childField: 'product',
              query: {
                $select: ['qty']
              }
            },
            {
              service: 'sales',
              nameAs: 'sales',
              parentField: '_id',
              childField: 'product',
              query: {
                $select: ['qty']
              }
            }
          ]
        }
      }) 
    ],
    find: [],
    get: [
      // async context => {
      //   const productId = context.id;

      //   // Since context.app.service('users').get returns a promise we can `await` it
      //   const purchase = await context.app.service('purchase').get(productId);

      //   // Update the result (the message)
      //   context.result.inventory = 0;

      //   // Returning will resolve the promise with the `context` object
      //   return context;
      // }
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
