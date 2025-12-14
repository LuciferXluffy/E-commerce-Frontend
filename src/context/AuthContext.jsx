import { createContext, useContext, useEffect, useState } from "react";

// 1. Create context
const AuthContext = createContext(null);

// 2. Creating Provider
export const AuthProvider = ({ children }) => {
  // 3. state global
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 4. On app reload → restore data from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser)); // converting user from localstorage(string) to JSON
      setIsAuthenticated(true);
    }
  }, []);

  // 5. Login
  const login = (AuthResponse) => {
    setToken(AuthResponse.token);
    setUser({
      email: AuthResponse.email,
      firstname: AuthResponse.firstname,
    });
    setIsAuthenticated(true);
    localStorage.setItem("token", AuthResponse.token);
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: AuthResponse.email,
        firstname: AuthResponse.firstname,
      })
    );
  };

  //6. Logout
  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  //7.Provide Values To Provider
  return (
    <AuthContext.Provider
      value={{ token, user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 8. Custom hook (clean usage)
export const useAuth = () => {
  return useContext(AuthContext);
};
