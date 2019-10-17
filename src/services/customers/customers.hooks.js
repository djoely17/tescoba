const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      context => {
        if(context.data.name.trim() === '') {
          throw new Error("Customer's Name can not be empty");
        }
        if(context.data.phone.trim() === '') {
          throw new Error("Phone Number can not be empty");
        }
        if(context.data.address.trim() === '') {
          throw new Error("Customer's Address can not be empty");
        }
      }
    ],
    update: [
      context => {
        if(context.data.name.trim() === '') {
          throw new Error("Customer's Name can not be empty");
        }
        if(context.data.phone.trim() === '') {
          throw new Error("Phone Number can not be empty");
        }
        if(context.data.address.trim() === '') {
          throw new Error("Customer's Address can not be empty");
        }
      }
    ],
    patch: [
      context => {
        if(context.data.name.trim() === '') {
          throw new Error("Customer's Name can not be empty");
        }
        if(context.data.phone.trim() === '') {
          throw new Error("Phone Number can not be empty");
        }
        if(context.data.address.trim() === '') {
          throw new Error("Customer's Address can not be empty");
        }
      }
    ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
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
