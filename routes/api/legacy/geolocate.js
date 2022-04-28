import express from "express";

const router = express.Router();

router.get("/:latitude/:longitude/:fuelType/:service/", async (req, res) => {
  const response = await server("position", {
    pointsListStr: req.params.latitude + "-" + req.params.longitude,
    carb: fuelType[req.params.fuelType] + "-" + service[req.params.service],
    ordPrice: "asc",
  });
  fs.appendFile("osservaprezzi.log", response ? "success\n" : null, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  response.pumps.sort(
    (a, b) =>
      a.fuels[req.params.fuelType].self - b.fuels[req.params.fuelType].self
  );
  res.send(response);
});

export default router;
