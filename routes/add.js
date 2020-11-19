const { Router } = require("express");
const Course = require("../models/course");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "Add new course",
    isAdd: true,
  });
});

router.post("/", async (req, res) => {
  try {
    const { title, price, img } = req.body;
    const course = new Course(title, price, img);
    const responseData = await course.save();
    console.log(responseData);
    res.redirect("/courses");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
