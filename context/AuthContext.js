import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decodeToken } from "../util/token";

export const AuthContext = createContext({
  user: {},
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        const authenticatedUser = decodeToken(storedToken);
        setToken(storedToken);
        setUser(authenticatedUser.user);
      }
    }
    getToken();
  }, []);
  const authenticate = async(token) => {
    const decodedToken = decodeToken(token);
    await AsyncStorage.setItem("token", token);
    setUser(decodedToken.user);
    setToken(token);
  };

  const logout = async() => {
    await AsyncStorage.removeItem("token");
    setUser({});
    setToken(null);
  };

  const value = {
    token: token,
    isAuthenticated: !!token,
    authenticate: authenticate,
    user: user,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
