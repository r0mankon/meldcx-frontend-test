import { createContext, useCallback, useContext, useMemo } from 'react';
import { useHistory } from 'react-router';
import getlogIn from '../api/getLogin';
import storage from '../libs/storage';

interface User {
   email: string;
   password: string;
}

interface Auth {
   logIn: (u: User, cb: () => void) => Promise<void>;
   logOut: () => void;
}

const AuthContext = createContext({} as Auth);

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC = ({ children }) => {
   const history = useHistory();

   const logIn = useCallback(async (user: User, cb: () => void) => {
      await getlogIn(user).then(token => {
         storage.setToken(token);
         cb();
      });
   }, []);

   const logOut = useCallback(() => {
      storage.setToken(null);
      history.push('/login');
   }, [history]);

   const memorizedValue: Auth = useMemo(
      () => ({ logIn, logOut }),
      [logIn, logOut]
   );

   return (
      <AuthContext.Provider value={memorizedValue}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
