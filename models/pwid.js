"use strict";
module.exports = (sequelize, DataTypes) => {
  var PwID = sequelize.define(
    "PwID",
      {
          
          PwID: DataTypes.INTEGER,
          FirstName: DataTypes.STRING,
          LastName: DataTypes.STRING,
          PersonalInterest: DataTypes.STRING,
          skill: DataTypes.STRING,
          WorkExperience: DataTypes.STRING,
          Industry: DataTypes.STRING,
          WorkLocationPreference: DataTypes.STRING,
          StartEndTimePreference: DataTypes.STRING,
          WorkingDaysPreference: DataTypes.STRING,
          NRIC: DataTypes.INTEGER,
          jobcoachID: DataTypes.INTEGER,
          CreatedAt:DataTypes.STRING,
          UpdatedAt: DataTypes.STRING,
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
          contactNumber:DataTypes.STRING,
          gender:DataTypes.STRING,
          dateOfBirth:DataTypes.STRING,
          address:DataTypes.STRING,
          postalCode:DataTypes.STRING,
          support: DataTypes.STRING,
          photo:DataTypes.STRING,
          resumePhoto: DataTypes.STRING,
      }
  );
PwID.associate = function(models) {
    // associations can be defined here
  };
return PwID;
};