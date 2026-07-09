const { Router } = require("express");
const router = Router();
const JobController = require("../controllers/JobController");

// [Get Routes]

// --- Home-page

router.get("/", JobController.search);

// --- Job-page

router.get("/view/:id", JobController.jobPage);

// --- Add-page

router.get("/add", JobController.addPage);

// [Post Routes]

// --- Add-page

router.post("/add", JobController.addJob);

module.exports = router;
