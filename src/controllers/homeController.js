import db from "../models/index";
import crudUserService from "../services/crudUserService";
import Constants from "../utils/constants";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render(`homepage.ejs`, { data: JSON.stringify(data) });
  } catch (err) {
    console.log(err);
  }
};

let getCrudUser = (req, res) => {
  try {
    return res.render(`crudUser.ejs`, { Constants });
  } catch (err) {
    console.log(err);
  }
};

let postCrudUser = async (req, res) => {
  let message = await crudUserService.createUser(req.body);
  console.log(message);
  return res.send(`post crud from server`);
};

module.exports = {
  getHomePage: getHomePage,
  getCrudUser: getCrudUser,
  postCrudUser: postCrudUser,
};
