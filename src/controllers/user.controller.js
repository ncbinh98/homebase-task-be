const userService = require("../services/user.service");

async function getOne(req, res, next) {
  try {
    const userId = req.params.id;
    const user = await userService.getOneUser(userId);
    if (!user) {
      res.status(400).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
}
async function get(req, res, next) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const data = req.body;
    const newUser = await userService.createOneUser(data);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const userId = req.params.id;
    const data = req.body;
    const user = await userService.updateOneUser(userId, data);
    if (!user) {
      res.status(400).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const userId = req.params.id;
    const isDeleted = await userService.deleteOneUser(userId);
    if (!isDeleted) {
      res.status(400).json({ error: "User not found" });
    }
    res.json({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  get,
  getOne,
  create,
  update,
  remove,
};
