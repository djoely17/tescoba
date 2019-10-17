// products-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const products = new Schema({
    product_name: { type: String, required: true },
    price: { type: String, required: true },
    distributor: { type: Schema.Types.ObjectId, ref: "Distributors" },
    createdAt: { type: Date, default: Date.Now },
    updatedAt: { type: Date, default: Date.Now }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('products');
  } catch (e) {
    return mongooseClient.model('products', products);
  }
};
