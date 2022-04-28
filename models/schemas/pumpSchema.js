import mongoose from "mongoose";

const pumpSchema = new mongoose.Schema({
  pumpId: Number,
  coords: {
    lat: Number,
    lon: Number,
  },
  region: String,
  province: String,
  town: String,
  address: String,
  zip: Number,
  name: String,
  brand: String,
  lastUpdate: String,
  fuels: {},
});

export default pumpSchema;
