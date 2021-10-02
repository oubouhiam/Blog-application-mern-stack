const Article = require("../models/articles.model");
const User = require("../models/users.model");
// ---------------------------add Article--------------------
const addArticle = async (req, res) => {
 

  const title = req.body.title;
  const date = req.body.date;
  const description = req.body.description;
  const imageArticle = req.body.imageArticle;
  const category = req.body.category;
  const author = req.body.author;
  const verified ="UnConfirmed";
  const ArticlePush = new Article({
    title,
    date,
    description,
    imageArticle,
    category,
    author,
    verified,
  });
  let article = await ArticlePush.save();
  res.send(article);
};
//__ _____________________ get Ads By Admin __________________
const getArticleByAuthor = (req, res) => {
  Article.find({
    author: req.params.author,
  })
    .then((Article) => {
      res.send(Article);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving question.",
      });
    });
};
//----------------------get all Article----------------------
const getAllArticle = (req, res) => {
  Article.find()
    .then((Article) => {
      res.status(200).json(Article);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};
//_____________________get Article By Id _________________
const getArticleById = (req, res) => {
  Article.findById(req.params.id)
    .then((Article) => {
      res.status(200).json(Article);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Article not found with id " + req.params.id,
          error: err,
        });
      }
      return res.status(500).send({
        message: "Error retrieving Article with id " + req.params.id,
        error: err,
      });
    });
};
//____________________updating Article _________________
const updateArticle = (req, res) => {
  // Find Product By ID and update it
  Article.updateOne(
    {
      _id: req.params.id,
    },
    {
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      imageArticle: req.body.imageArticle,
      category: req.body.category,
    }
  )
    .then(() => res.status(201).json("Ads updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
};

//_____________________get last Article _________________
const getLastArticle = (req, res) => {
  Article.find()
    .populate('author_id')
    .sort({ _id: -1 })
    .limit(1)
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "article not found with id " + req.params.id,
          error: err,
        });
      }
      return res.status(500).send({
        message: "Error retrieving article with id " + req.params.id,
        error: err,
      });
    });
};
//____________________Delete Article ______________________________
const deleteArticle = (req, res) => {
  const { id } = req.params;
  Article.findOneAndDelete({ _id: id })
    .then((Article) => {
      if (!Article) {
        res.status(404).json({
          message: "Does Not exist a Article with id = ",
          error: "404",
        });
      }
      res.status(200).json({});
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error -> Can NOT delete a Article with id = ",
        error: err.message,
      });
    });
};
//__ _____________________ get Article By Author __________________
const getAdsByAuthor = (req, res) => {
  Article.find({
    author: req.params.author,
  })
    .then((article) => {
      res.send(article);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving question.",
      });
    });
};
//_____________________get first article _________________
const getFirstArticle= (req, res) => {
  Article.find()
    .sort({ _id: 1 })
    .limit(1)
    .then((ads) => {
      res.status(200).json(ads);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Ads not found with id " + req.params.id,
          error: err,
        });
      }
      return res.status(500).send({
        message: "Error retrieving Ads with id " + req.params.id,
        error: err,
      });
    });
};
//-------------------------logout-----------------------------
  const logout = (req, res) => {
    const deconnect = res.clearCookie("token")

    res.json({
        message: 'User is Signout !!'
    })
  }



module.exports = {
  addArticle,
  getAllArticle,
  updateArticle,
  getLastArticle,
  logout,
  deleteArticle,
  getAdsByAuthor,
  getArticleByAuthor,
  getArticleById,
  getFirstArticle,
};
