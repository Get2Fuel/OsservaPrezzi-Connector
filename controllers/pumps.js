import {
  findByGeolocation,
  findOneById,
  findOneByPumpId,
} from "../models/pumps.js";

export const getPumps = async (req, res) => {
  res.status(200).send({ message: "this is getPumps" });
};

export const getFilterdPumps = async (req, res) => {
  if (req.query.latitude && req.query.longitude) {
    const { latitude, longitude, maxDistance, fuelType, service, sort } =
      req.query;

    const pumps = await findByGeolocation({
      latitude,
      longitude,
      maxDistance,
      fuelType,
      service,
      sort,
    });

    return res.status(200).json(pumps);
  }
  if (req.query.region) {
    const { region, province, town, fuelType, service, sort } = req.query;

    return res.status(200).json({
      searchBy: "address",
      region,
      province,
      town,
      fuelType,
      service,
      sort,
    });
  }
  res
    .status(200)
    .json({ message: "this is getFilteredPumps", response: req.query });
};

export const getPump = async (req, res) => {
  const { id } = req.params;
  const pump = await findOneByPumpId(+id);
  res.status(200).json(pump);
};
