const Job = require("../models/Job");
const { Op } = require("sequelize");

const JobController = {
  // ---
  async search(req, res) {
    // ---
    try {
      // ---
      const search = req.query.job;
      const query = "%" + search + "%"; // PH -> PHP, Word -> WordPress, Press -> Wordpress
      let jobs;

      if (!search) {
        // ---
        jobs = await Job.findAll({ order: [["createdAt", "DESC"]] });
        res.render("index", { jobs });
        // ---
      } else {
        // ---
        jobs = await Job.findAll({
          where: { title: { [Op.like]: query } },
          order: [["createdAt", "DESC"]],
        });
        res.render("index", { jobs, search });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocorreu um erro interno.");
    }
  },

  async jobPage(req, res) {
    // ---
    try {
      // ---
      const job = await Job.findOne({
        where: { id: req.params.id },
      });

      res.render("view", {
        job,
      });
      // ---
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocorreu um erro interno.");
    }
  },

  addPage(req, res) {
    // ---
    res.render("add");
  },

  async addJob(req, res) {
    // ---
    try {
      // ---
      const { title, salary, company, description, email, new_job } = req.body;

      await Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job,
      });

      res.redirect("/");
      //---
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocorreu um erro interno.");
    }
  },
};

module.exports = JobController;
