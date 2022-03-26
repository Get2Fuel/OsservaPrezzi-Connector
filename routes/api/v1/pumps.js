import express from "express";
import {
  getFilterdPumps,
  getPump,
  getPumps,
} from "../../../controllers/pumps.js";

const router = express.Router();

router.get("/", getPumps);
router.get("/query", getFilterdPumps);
router.get("/:id", getPump);

export default router;
