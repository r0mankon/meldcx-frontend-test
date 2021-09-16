import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
   devicePage: {
      flex: 1,
      backgroundColor: '#FF7043',
      display: 'flex',
      flexDirection: 'column',
   },
   main: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
   },
   devices: {},
   circleLeft: {
      top: 280,
      right: 120,
   },
   circleRight: {
      bottom: 55,
      left: 175,
   },
   counter: {
      textAlign: 'center',
   },
   counterText: {
      textTransform: 'uppercase',
   },
   footer: {
      backgroundColor: '#D76845',
      width: '100%',
      display: 'flex',
      gap: theme.spacing(1),
      justifyContent: 'center',
      padding: theme.spacing(1.7),
   },
}));

export default useStyles;
