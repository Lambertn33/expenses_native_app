import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const decodeToken = (token) => jwt_decode(token);

export const getToken = async () => {
  return await AsyncStorage.getItem("token");
};

export const getUser = async () => {
  return await AsyncStorage.getItem("user");
};
