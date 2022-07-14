const express = require("express");
const router = express.Router();
const {
    getAllColors,
    createColor,
    updateColor,
    deleteColor, 
} = require("../controlers/color")

router.route("/").get(getAllColors).post(createColor)
router.route("/:id").patch(updateColor).delete(deleteColor)


module.exports = router