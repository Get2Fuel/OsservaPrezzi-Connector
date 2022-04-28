import {
  findByAddress,
  findByGeolocation,
  findOneByPumpId,
} from "../../modules/legacyapi.js";

export const getPumps = async (req, res) => {
  res.status(200).send({ message: "this is getPumps" });
};

export const getFilterdPumps = async (req, res) => {
  if (req.query.latitude && req.query.longitude) {
    const { latitude, longitude, fuelType, service, sort } = req.query;

    const pumps = await findByGeolocation({
      latitude,
      longitude,
      fuelType,
      service,
      sort,
    });

    return res.status(200).json(pumps);
  }
  if (req.query.region || req.query.province || req.query.town) {
    const { region, province, town, fuelType, service, sort } = req.query;

    const pumps = await findByAddress({
      region,
      province,
      town,
      fuelType,
      service,
      sort,
    });

    return res.status(200).json(pumps);
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
