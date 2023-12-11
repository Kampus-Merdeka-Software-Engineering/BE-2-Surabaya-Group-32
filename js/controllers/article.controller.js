const model = require("../models/article.models.js");
const { cookieCheck, getCookie } = require("../global.utils.js");

// Article model
exports.findAllArticles = async (req, res) => {
  if (!(await cookieCheck(req.headers.cookie))) {
    res.redirect("http://localhost:3000/app/login");
    return;
  }

  await model.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving articles.",
      });
    }

    res.send(data);
  });
};

exports.findOneArticle = async (req, res) => {
  try {
  if (!(await cookieCheck(req.headers.cookie))) {
    res.redirect("http://localhost:3000/app/login");
    return;
  }

  await model.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: `Not found article with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving article with id ${req.params.id}.`,
        });
      }
    }

    res.send(data);
  });
  } catch (err) {
    console.log(err);
  }
};

exports.createArticle = async (req, res) => {
  const { tag_id, article_title, article_content, article_link} = req.body;
  const publisher_id = await getCookie("login-token", req.headers.cookie);
  const image = req.file ? req.file.filename : null;

  const newArticle = {
    tag_id,
    article_title,
    article_content,
    publisher_id,
    image,
    article_link,
  };

  await model.create(newArticle, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the article.",
      });
    } else {
      res.redirect("http://localhost:3000/app/admin");
    }
  });
};

exports.updateArticle = async (req, res) => {
  const { tag_id, article_title, article_content, article_link} = req.body;
  const image = req.file ? req.file.filename : null;
  const publisher_id = await getCookie("login-token", req.headers.cookie);

  const updatedArticle = {
    tag_id,
    article_title,
    article_content,
    publisher_id,
    image,
    article_link,
  };

  await model.update(req.params.id, updatedArticle, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: `Not found article with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating article with id ${req.params.id}.`,
        });
      }
    }

    res.redirect("http://localhost:3000/app/admin");
  });
};

exports.getArticleByTag = async (req, res) => {
  await model.findByTag(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving articles.",
      });
    }

    res.send(data);
  });
}

exports.deleteArticle = async (req, res) => {
  await model.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: `Not found article with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete article with id ${req.params.id}.`,
        });
      }
    }

    res.send({ message: `Article was deleted successfully!` });
  });
}