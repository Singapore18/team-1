"use strict";
module.exports = (sequelize, DataTypes) => {
    var jobcoach = sequelize.define(
        "jobcoach",
        {
            jobcoachID: DataTypes.INTEGER,
            username: DataTypes.STRING,
        }
  );
jobcoach.associate = function (models) {
    // associations can be defined here
};
return jobcoach;
};