const router = require("express").Router();

const {
  getAllJobs,
  singleJob,
  createJobs,
  updateSingleJob,
  deleteJob,
  companyJobs,
  myJobs,
} = require("../controllers/jobs");

const {
  createBookmark,
  allBookmark,
  deleteBookmark,
} = require("../controllers/bookmark");

const { createApplyJob, allJobApllication } = require("../controllers/apply");

const {
  createCompany,
  allCompany,
  singleCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/company");

router
  .post("/jobs", createJobs)
  .get("/jobs", getAllJobs)
  .get("/my-jobs", myJobs)
  .get("/jobs/:id", singleJob)
  .put("/jobs/:id", updateSingleJob)
  .delete("/jobs/:id", deleteJob)
  .get("/jobs/company/:compId", companyJobs)
  .post("/bookmark", createBookmark)
  .get("/bookmark", allBookmark)
  .delete("/bookmark/:jobId", deleteBookmark)
  .post("/apply", createApplyJob)
  .get("/apply", allJobApllication)
  .post("/company", createCompany)
  .get("/company", allCompany)
  .get("/company/:id", singleCompany)
  .put("/company/:id", updateCompany)
  .delete("/company/:id", deleteCompany);

module.exports = router;
