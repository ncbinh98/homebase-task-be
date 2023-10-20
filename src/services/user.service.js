const { UserModel } = require("../models/user.model");

async function getUsers() {
  return await UserModel.findAll();
}

async function getOneUser(userId) {
  return await UserModel.findByPk(userId);
}

async function createOneUser(dto) {
  return await UserModel.create({
    ...dto,
  });
}

async function updateOneUser(userId, dto) {
  const existingUser = await UserModel.findByPk(userId);

  if (existingUser) {
    return await existingUser.update({
      ...dto,
    });
  }
}

async function deleteOneUser(userId) {
  // Check if the user with the given ID exists
  const existingUser = await UserModel.findByPk(userId);
  if (existingUser) {
    await existingUser.destroy();
    return { success: true };
  }
}

module.exports = {
  getUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
  deleteOneUser,
};
