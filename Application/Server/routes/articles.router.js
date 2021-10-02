const express = require("express");
const app = express.Router();
const ArticleController = require("../controlers/articles.controler");

app.post("/addArticle", ArticleController.addArticle);
app.get("/logout", ArticleController.logout);
app.get("/getAllArticle", ArticleController.getAllArticle);
app.get("/getArticleByAuthor/:author", ArticleController.getArticleByAuthor);
app.get("/getArticleById/:id", ArticleController.getArticleById);
app.put("/updateArticle/:id", ArticleController.updateArticle);
app.get("/getLastArticle", ArticleController.getLastArticle);
app.get("/getFirstArticle", ArticleController.getFirstArticle);
app.delete("/deleteArticle/:id", ArticleController.deleteArticle);
app.get("/getAdsByAuthor/:author", ArticleController.getAdsByAuthor);
module.exports = app;