import express, { response } from "express";
import api from "./api.js";

const app = express();
const port = 3000;
const server = api;

app.get("/search/region/province/town/", async (req, res) => {
  const response = await server("localita", {
    region: "19",
    province: "LC",
    town: "Calco",
    carb: "1-x",
    ordPrice: "asc",
  });
  console.log(response);
  res.send(response);
});

app.get("/geolocate/coordinates/", async (req, res) => {
  const response = await server("localita", {
    region: "19",
    province: "LC",
    town: "Calco",
    carb: "1-x",
    ordPrice: "asc",
  });
  console.log(response);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
