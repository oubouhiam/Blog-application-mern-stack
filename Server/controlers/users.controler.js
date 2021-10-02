const User = require('../models/users.model');
const Ads = require("../models/ads.model");
const Article = require("../models/articles.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");




const addUsers = async (req, res) => {



     const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(req.body.password, salt);
//   bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
//     if (err) {
//       res.json({ error: err });
//     }
    const fullName = req.body.fullName;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = hashPassword;
    const city = req.body.city;
    const role = req.body.role;
    const UserPush = new User({
      fullName,
      email,
      phone,
      password,
      city,
      role,
    });
   let user = await UserPush.save();
   res.send(user)

};
// ----------------------login---------------------------
const loginUsers = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign({ email: email }, "tokenkey", (err, token) => {
              res.cookie("token", token);
              res.json({
                token: token,
                role: user.role,
                user: user,
              });
            });
          }
        });
      } else {
        res.json({
          message: "User not found",
        });
      }
    })
    .catch((err) => res.status(400).json("Error :" + err));
};

//----------------------get all users----------------------
const getAllUsers = (req, res) => {
  User.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};

//____________________updating User _________________
const updateUser = (req, res) => {
  // Find Product By ID and update it
  User.updateOne({
      _id: req.params.id
    }, {
      fullName: req.body.fullName,
      city: req.body.city,
      email: req.body.email,
      phone: req.body.phone,
      role: req.body.role,
    })
    .then(() => res.status(201).json("User updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
};
//_____________________get User By Id _________________
const getUserById = (req, res) => {
  User.findById(req.params.id)
      .then(user => {
        res.status(200).json(user);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "User not found with id " + req.params.id,
                  error: err
              });
          }
          return res.status(500).send({
              message: "Error retrieving User with id " + req.params.id,
              error: err
          });
      });
};
//____________________Delete User______________________________
const deleteUser = (req, res) => {
  const {id} = req.params;
  User.findOneAndDelete({_id: id})
      .then(user => {
          if(!user) {
            res.status(404).json({
              message: "Does Not exist a User with id = ",
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a User with id = ",
            error: err.message,
          });
      });
};
// ---------------------------ad ads--------------------
const addAds = async (req, res) => {
 

  const title = req.body.title;
  const company = req.body.company;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const Admin = req.body.Admin;
  const AdsPush = new Ads({
    title,
    company,
    description,
    imageUrl,
    Admin,
  });
  let ads = await AdsPush.save();
  res.send(ads);
};

//__ _____________________ get Ads By Admin __________________
const getAdsByAdmin = (req, res) => {
  Ads.find({
    Admin: req.params.Admin,
  })
    .then((Ads) => {
      res.send(Ads);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving question.",
      });
    });
};

//----------------------get all Ads----------------------
const getAllAds = (req, res) => {
  Ads.find()
    .then((ads) => {
      res.status(200).json(ads);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};
//____________________updating Ads _________________
const updateAds = (req, res) => {
  // Find Product By ID and update it
  Ads.updateOne({
      _id: req.params.id
    }, {
      title : req.body.title,
      company : req.body.company,
      description : req.body.description,
      imageUrl : req.body.imageUrl,
    })
    .then(() => res.status(201).json("Ads updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
};
//_____________________get Ads By Id _________________
const getAdsById = (req, res) => {
  Ads.findById(req.params.id)
      .then(ads => {
        res.status(200).json(ads);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Ads not found with id " + req.params.id,
                  error: err
              });
          }
          return res.status(500).send({
              message: "Error retrieving Ads with id " + req.params.id,
              error: err
          });
      });
};
//____________________Delete Ads ______________________________
const deleteAds = (req, res) => {
  const {id} = req.params;
  Ads.findOneAndDelete({_id: id})
      .then(ads => {
          if(!ads) {
            res.status(404).json({
              message: "Does Not exist a Ads with id = ",
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a Ads with id = ",
            error: err.message,
          });
      });
};


//_____________________get last ads _________________
const getLastAds= (req, res) => {
  Ads.find()
    .sort({ _id: -1 })
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

 //________________________updating Article__________________________
const confirmArticle = (req, res) => {
        // Find Seller By ID and update it
        Article.updateOne(
          { _id: req.params.id },
          {
            verified: req.body.verified,
          }
        )
          .then(() => res.status(201).json("Article updated successfully"))
          .catch((err) => res.status(400).json("Error :" + err));
      };

//-------------------------logout-----------------------------
  const logout = (req, res) => {
    const deconnect = res.clearCookie("token")

    res.json({
        message: 'User is Signout !!'
    })
  }



module.exports = {
  addUsers,
  loginUsers,
  logout,
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser,
  addAds,
  getAdsByAdmin,
  getAllAds,
  getAdsById,
  updateAds,
  deleteAds,
  getLastAds,
  confirmArticle,
};