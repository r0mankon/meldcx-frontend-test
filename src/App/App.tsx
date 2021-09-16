import { Redirect, Route, Switch } from 'react-router-dom';
import DevicePage from '../components/DevicePage';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import useStyles from './styles';

function App() {
   const styles = useStyles();

   return (
      <div className={styles.App}>
         <Switch>
            <PrivateRoute path='/' exact component={DevicePage} />
            <Route path='/login' component={Login} />
            <Route path='*'>
               <Redirect to='/' />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
