import { User, Product } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, "i");

  const USER_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .skip((page - 1) * USER_PER_PAGE)
      .limit(USER_PER_PAGE);
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();

    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, "i");

  const PRODUCT_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .skip((page - 1) * PRODUCT_PER_PAGE)
      .limit(PRODUCT_PER_PAGE);
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();

    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch product!");
  }
};
