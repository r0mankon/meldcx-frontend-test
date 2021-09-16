import {
   Box,
   Container,
   InputAdornment,
   Paper,
   TextField,
} from '@material-ui/core';
import Text from '@material-ui/core/Typography';
import { Security, Email } from '@material-ui/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../store/AuthProvider';
import MyButton from '../MyButton';
import useStyles from './styles';

const Login: React.FC = () => {
   const styles = useStyles();
   const auth = useAuth();
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState<any>('');

   const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   };

   const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!email || !password) {
         return setError('There is no room for anonymous');
      }

      auth
         .logIn({ email, password }, () => {
            history.replace('/');
         })
         .catch(e => setError(e.message));
   };

   return (
      <div className={styles.loginPage}>
         <Container
            component={Paper}
            maxWidth='xs'
            className={styles.container}
         >
            <Text variant='h3' className={styles.title}>
               Login
            </Text>

            <form
               autoComplete='off'
               autoCapitalize='off'
               onSubmit={handleSubmit}
               className={styles.form}
            >
               <TextField
                  onChange={getEmail}
                  variant='outlined'
                  color='secondary'
                  name='email'
                  type='email'
                  placeholder='Email Address'
                  size='small'
                  className={styles.textField}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position='start'>
                           <Email />
                        </InputAdornment>
                     ),
                  }}
               />
               <TextField
                  onChange={getPassword}
                  variant='outlined'
                  color='secondary'
                  name='password'
                  type='password'
                  placeholder='Password'
                  size='small'
                  className={styles.textField}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position='start'>
                           <Security />
                        </InputAdornment>
                     ),
                  }}
               />
               <MyButton
                  className={styles.loginButton}
                  type='submit'
                  color='primary'
               >
                  Log In
               </MyButton>
            </form>

            {error && (
               <Box textAlign='center' paddingY={2}>
                  <Text color='error'>{error}</Text>
               </Box>
            )}
         </Container>
      </div>
   );
};

export default Login;
