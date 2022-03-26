import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import corsing from "./middleware/corsing.js";
import pumps from "./routes/api/v1/pumps.js";

const app = express();

// Install modules
app.use(corsing);

// Setup public dir
app.use(express.static("./public"));

// Install routers
app.use("/api/v1/pumps", pumps);

// Default route
app.all("*", (req, res) => {
  res.status(404).json({ message: "please provide a valid route" });
});

// Start DB connection
try {
  console.log(`Trying to connect to ${process.env.LOCAL_IP}...`);
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
  try {
    console.log(`Trying to connect to ${process.env.REMOTE_IP}...`);
    await mongoose.connect(
      `mongodb://${process.env.REMOTE_IP}:27017/osservaprezzi`,
      {
        authSource: "admin",
        user: process.env.USER,
        pass: process.env.PW,
      }
    );
  } catch (error) {
    console.error("Connection failed");
    console.error(error);
  }
}

// Run server
app.listen(process.env.PORT, () => {
  console.log(`app listening at http://localhost:${process.env.PORT}`);
});
