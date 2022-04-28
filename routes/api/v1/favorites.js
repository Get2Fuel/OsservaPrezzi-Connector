import express from "express";

const router = express.Router();

// GET favorites
// GET favorite
// POST favorite
// DELETE favorite

router.get("/", getPumps);
router.get("/query", getFilterdPumps);
router.get("/:id", getPump);

export default router;
