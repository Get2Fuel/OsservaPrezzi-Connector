import express from "express";
import cors from "cors";
import api from "./api.js";

const app = express();
const corsing = cors({
  origin: "*",
});
const port = 61234;
const server = api;

app.use(corsing);

app.get(
  "/search/:region/:province/:town/:fuelType/:service/",
  async (req, res) => {
    const response = await server("localita", {
      region: regions[req.params.region],
      province: req.params.province,
      town: req.params.town,
      carb: fuelType[req.params.fuelType] + "-" + service[req.params.service],
      ordPrice: "asc",
    });
    res.send(response);
  }
);

app.get(
  "/geolocate/:latitude/:longitude/:fuelType/:service/",
  async (req, res) => {
    const response = await server("position", {
      pointsListStr: req.params.latitude + "-" + req.params.longitude,
      carb: fuelType[req.params.fuelType] + "-" + service[req.params.service],
      ordPrice: "asc",
    });
    console.log(response);
    res.send(response);
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.0.70:${port}`);
});

const regions = {
  Marche: 1,
  Abruzzo: 2,
  Basilicata: 3,
  Molise: 4,
  TrentinoAltoAdige: 5,
  Puglia: 6,
  Calabria: 7,
  Campania: 8,
  Lazio: 9,
  Sardegna: 10,
  Sicilia: 11,
  Toscana: 12,
  Piemonte: 13,
  EmiliaRomagna: 14,
  FriuliVeneziaGiulia: 15,
  ValDAosta: 16,
  Veneto: 17,
  Liguria: 18,
  Lombardia: 19,
  Umbria: 20,
};

const fuelType = {
  gasoline: "1",
  diesel: "2",
  methane: "3",
  lpg: "4",
};

const service = {
  any: "x",
  self: "0",
  served: "1",
};
