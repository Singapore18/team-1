"use strict";
const drawer = require("./drawer");
const checked = require("./checked");
const images = require("./images");
const notebook = require("./notebook");
const label = require("./label");
const labelSet = require("./labelSet");
const version = require("./version");
module.exports = {
  ...drawer,
  ...checked,
  ...images,
  ...notebook,
  ...label,
  ...labelSet,
  ...version
};
