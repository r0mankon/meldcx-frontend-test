import { Redirect, Route } from 'react-router-dom';
import storage from '../libs/storage';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
   const token = storage.getToken();

   const RenderComponent = () => {
      return token ? (
         <Component />
      ) : (
         <Redirect
            to={{
               pathname: '/login',
            }}
         />
      );
   };

   return <Route {...rest} render={RenderComponent} />;
};

export default PrivateRoute;
