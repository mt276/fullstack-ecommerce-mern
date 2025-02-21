import connection from "../config/database";

let getHomePage = (req, res) => {
  return res.render(`homepage.ejs`);
};

module.exports = {
  getHomePage: getHomePage,
};
