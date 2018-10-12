"use strict";
module.exports = (sequelize, DataTypes) => {
  var employer = sequelize.define(
    "employer",
    {
      employerID: DataTypes.INTEGER,
      username: DataTypes.STRING,
    },
    {}
  );
  employer.associate = function(models) {
    // associations can be defined here
  };
  return employer;
};