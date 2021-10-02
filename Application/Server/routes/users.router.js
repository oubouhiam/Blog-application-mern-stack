const express = require("express");
const app = express.Router();
const UsersController = require("../controlers/users.controler");

app.post("/addUsers", UsersController.addUsers);
app.post("/addAds", UsersController.addAds);
app.post("/loginUsers", UsersController.loginUsers);
app.get("/logout", UsersController.logout);
app.get("/getAllUsers", UsersController.getAllUsers);
app.get("/getAllAds", UsersController.getAllAds);
app.get("/getUserById/:id", UsersController.getUserById);
app.get("/getAdsByAdmin/:Admin", UsersController.getAdsByAdmin);
app.put("/updateUser/:id", UsersController.updateUser);
app.delete("/deleteUser/:id", UsersController.deleteUser);
app.get("/getAdsById/:id", UsersController.getAdsById);
app.put("/updateAds/:id", UsersController.updateAds);
app.put("/confirmArticle/:id", UsersController.confirmArticle);
app.delete("/deleteAds/:id", UsersController.deleteAds);
app.get("/getLastAds", UsersController.getLastAds);

module.exports = app;
