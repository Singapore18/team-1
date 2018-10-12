var models = require('../models');



function list(req, res) {
  models.user.findAll().then(user => {
    res.status(200).json({
      data: { user: user }
    });
  });
}


/*
function single(req, res) {
  const id = req.params.id;
  models.user
    .findOne({ where: { id: id } })
    .then(user => {
      res.status(200).json({
        data: { user: user }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({
        message: err.message,
        error: JSON.stringify(err, Object.getOwnPropertyNames(err))
      });
    });
}

function findUser(req, res) {
  const username = req.params.username;
  models.user
    .findOne({ where: { username: username } })
    .then(user => {
      res.status(200).json({
        data: { user: user }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({
        message: err.message,
        error: JSON.stringify(err, Object.getOwnPropertyNames(err))
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updates = req.body;
  if (updates.password != null) {
    updates.password = encryptionHandler.encrypt(updates.password);
  }
  models.user
    .find({
      where: { id: id }
    })
    .then(user => {
      return user.update(updates);
    })
    .then(updatedUser => {
      res.status(200).json(updatedUser);
    });
}
*/

// function remove(req, res) {
//   const id = req.params.id;
//   models.user
//     .destroy({
//       where: { id: id }
//     })
//     .then(deleted => {
//       res.status(204).json(deleted);
//     });
// }
/*
function remove(req, res) {
  const id = req.params.id;
  const updates = req.body;
  models.user
    .find({
      where: { id: id }
    })
    .then(updateRecord => {
      return updateRecord.update(updates);
    })
    .then(updatedRecord => {
      res.status(200).json({
        data: { user: updatedRecord }
      });
    });
}
*/
//module.exports = { remove, list, update, single, create, findUser };
module.exports = {list};
