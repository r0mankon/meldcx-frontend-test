import { useCallback, useEffect, useState } from 'react';
import Text from '@material-ui/core/Typography';
import { setInterval } from 'timers';
import getDevices from '../../api/getDevices';
import notify from '../../api/notify';
import { useAuth } from '../../store/AuthProvider';
import useStyles from './styles';
import MyButton from '../MyButton';
import Circle from '../Circle';
import { Slide, Snackbar } from '@material-ui/core';

const DevicePage: React.FC = () => {
   const styles = useStyles();
   const [devices, setDevices] = useState(0);
   const auth = useAuth();
   const [toast, setToast] = useState('');

   const fetchOnlineDevices = useCallback(async () => {
      if (process.env.NODE_ENV !== 'production') {
         return setDevices(Math.floor(Math.random() * 10));
      }

      const { devices } = await getDevices().catch(setToast);

      setDevices(devices.length);
   }, []);

   useEffect(() => {
      if (process.env.NODE_ENV === 'test') return;

      fetchOnlineDevices();

      const fetchEvery5sec = setInterval(() => fetchOnlineDevices(), 5000);

      return () => clearInterval(fetchEvery5sec);
   }, [fetchOnlineDevices]);

   const handleNotify = () => {
      notify({
         name: 'Roman Rokon',
         email: 'rokon.rxr@gmail.com',
         repoUrl: 'https://github.com/r0manr0k0n/meldcx-frontend-test',
         message: 'I finished the test using my favorite libraries!',
      })
         .then(res => {
            setToast(res);
         })
         .catch(e => setToast(e.message));
   };

   const handleLogOut = () => {
      auth.logOut();
   };

   const handleToastClose = () => {
      setToast('');
   };

   return (
      <div className={styles.devicePage}>
         <main className={styles.main}>
            <div className={styles.devices}>
               <Circle className={styles.circleLeft} />
               <Circle className={styles.circleRight} />

               <Text variant='h1' className={styles.counter}>
                  {devices}
               </Text>

               <Text className={styles.counterText}>Devices Online</Text>
            </div>
         </main>

         <footer className={styles.footer}>
            <MyButton color='default' onClick={handleNotify}>
               Notify
            </MyButton>

            <MyButton color='secondary' onClick={handleLogOut}>
               Log Out
            </MyButton>
         </footer>

         <Snackbar
            open={!!toast}
            autoHideDuration={2500}
            onClose={handleToastClose}
            message={toast}
            TransitionComponent={Slide}
         />
      </div>
   );
};

export default DevicePage;
