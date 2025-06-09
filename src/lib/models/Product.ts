import mongoose, { Schema, models, model } from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String, // base64 string
    required: true,
  },
}, { timestamps: true });

export default models.Product || model('Product', ProductSchema); 