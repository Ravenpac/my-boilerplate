/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface IResponseLogin {
  user: User;
  access_token: string;
  refresh_token: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  device_token: null;
  created_at: string;
  updated_at: string;
}

interface IUserProvider {
  user: User;
  setUser: React.Dispatch<SetStateAction<User>>;
  isAuthenticated: () => boolean;
  logout: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const AuthContext = createContext({} as IUserProvider);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataUser = localStorage.getItem('@token: user');

    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }
    setLoading(false);
  }, []);

  const isAuthenticated = () => {
    return user.id !== undefined;
  };

  const logout = () => {
    localStorage.removeItem('@token: user');
    localStorage.removeItem('@token: accessToken');
    localStorage.removeItem('@token: refreshToken');
    setUser({} as User);
  };

  if (loading) {
    return null;
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
