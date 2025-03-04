import React, { createContext, useContext, useState } from 'react';

// Tạo Context
const AuthContext = createContext();

// Hook tùy chỉnh
export const useAuth = () => useContext(AuthContext);

// Provider bọc toàn bộ ứng dụng
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Hàm login
  const login = (userData) => {
    setUser(userData);
  };

  // Hàm logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
