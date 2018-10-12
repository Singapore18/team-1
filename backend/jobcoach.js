"use strict";
module.exports = (sequelize, DataTypes) => {
  var jobcoach = sequelize.define(
    "jobcoach",
    {
      jobcoachID: DataTypes.INT,
      username: DataTypes.STRING,
      lastname: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      }
    },
    {}
  );
  jobcoach.associate = function(models) {
    // associations can be defined here
  };
  return jobcoach;
};