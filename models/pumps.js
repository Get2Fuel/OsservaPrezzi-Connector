import mongoose from "mongoose";
import pumpSchema from "./schemas/pumpSchema.js";

const pumpModel = mongoose.model("pump", pumpSchema);

export const findOneById = async (id) => {
  const pump = await pumpModel.findById(id);
  return pump;
};

export const findOneByPumpId = async (pumpId) => {
  const pump = await pumpModel.findOne({ pumpId });
  return pump;
};

export const findByAddress = async (params) => {};

export const findByGeolocation = async (params) => {
  const pumps = await pumpModel
    .find({
      coordinates: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [+params.longitude, +params.latitude],
          },
          $minDistance: 0,
          $maxDistance: +params.maxDistance * 1000 || 5000,
        },
      },
    })
    .sort({ "fuels.gasoline.self": 1 });

  return pumps;
};
