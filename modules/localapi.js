import mongoose from "mongoose";
import "dotenv/config";
import fs from "fs";

try {
  await mongoose.connect(
    `mongodb://${process.env.LOCAL_IP}:27017/osservaprezzi`,
    {
      authSource: "admin",
      user: process.env.USER,
      pass: process.env.PW,
    }
  );
  console.log("Connection succeded");
} catch (error) {
  console.error("Connection failed");
  console.error(error);
}

const pumpSchema = new mongoose.Schema({
  pumpId: Number,
  coords: {
    lat: Number,
    lon: Number,
  },
  address: String,
  name: String,
  brand: String,
  lastUpdate: String,
  fuels: {},
});

const pumpModel = mongoose.model("pump", pumpSchema);

const pumps = await pumpModel.find();

fs.writeFile("result.json", JSON.stringify(pumps), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully\n");
  }
});
