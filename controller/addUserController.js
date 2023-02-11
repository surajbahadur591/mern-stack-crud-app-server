import User from "../schema/userSchema.js";

export const addUserController = async (request, response) => {
  const user1 = request.body;

  const newUser = new User(user1);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (e) {
    response.status(409).json({
      message: e.message,
    });
  }
};
