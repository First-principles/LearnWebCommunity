var router = require('express').Router();
const { RouteNames } = require("../../constants/constants");
const auth = require("../../helper/helper");
const { AddComment } = require("../methods/comments");

// router.post(RouteNames.AddComment, auth.required, AddComment);


module.exports = router;