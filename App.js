import React from 'react';
import { View } from 'react-native';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';

const Main = () => {
  const { user } = useAuth();
  return <View style={{ flex: 1 }}>{user ? <ProfileScreen /> : <LoginScreen />}</View>;
};

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
