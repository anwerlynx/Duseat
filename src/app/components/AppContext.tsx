import { createContext, useContext, useState, ReactNode } from 'react';

type UserType = 'agent' | 'investor' | null;

interface AppContextType {
  userType: UserType;
  userName: string;
  isLoggedIn: boolean;
  login: (type: 'agent' | 'investor', name: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType>({
  userType: null,
  userName: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>(null);
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (type: 'agent' | 'investor', name: string) => {
    setUserType(type);
    setUserName(name);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserType(null);
    setUserName('');
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider value={{ userType, userName, isLoggedIn, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
