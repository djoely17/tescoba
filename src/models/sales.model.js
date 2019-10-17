// sales-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const sales = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    customer: { type: Schema.Types.ObjectId, ref: "Customers" },
    product: { type: Schema.Types.ObjectId, ref: "Products" },
    qty: { type: Number, required: true },
    createdAt: { type: Date, default: Date.Now }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('sales');
  } catch (e) {
    return mongooseClient.model('sales', sales);
  }
};
