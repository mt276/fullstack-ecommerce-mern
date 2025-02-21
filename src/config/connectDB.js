const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("booking-care", "root", "123456", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection has been established successful.`);
  } catch (error) {
    console.error(`Unable to connect to the database: `, error);
  }
};

module.exports = connectDB;
