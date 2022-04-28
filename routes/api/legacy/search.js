import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await server("localita", {
    region: regions[req.params.region],
    province: req.params.province,
    town: req.params.town,
    carb: fuelType[req.params.fuelType] + "-" + service[req.params.service],
    ordPrice: "asc",
  });
  res.send(response);
});

router.get("/:region/:province/:town/:fuelType/:service/", async (req, res) => {
  const response = await server("localita", {
    region: regions[req.params.region],
    province: req.params.province,
    town: req.params.town,
    carb: fuelType[req.params.fuelType] + "-" + service[req.params.service],
    ordPrice: "asc",
  });
  res.send(response);
});

export default router;
