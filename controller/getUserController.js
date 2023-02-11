import User from "../schema/userSchema.js";

export const getUserController = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (e) {
    response.status(404).json({
      message: e.message,
    });
  }
};

export const editUserController = async (request, response) => {
  const id = request.params.id;
  try {
    const users = await User.find({ _id: id });
    response.status(200).json(users);
  } catch (e) {
    response.status(404).json({
      message: e.message,
    });
  }
};
export const editUserDataController = async (request, response) => {
  let user = request.body;
  const id = request.params.id;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: id }, editUser);
    response.status(201).json(editUser);
  } catch (e) {
    response.status(409).json({
      message: e.message,
    });
  }
};

export const deleteUserDataController = async (request, response) => {
  const id = request.params.id;
  try {
    await User.deleteOne({ _id: id });
    response.status(201).json({ message: "user deleted successfully" });
  } catch (e) {
    response.status(409).json({
      message: e.message,
    });
  }
};
