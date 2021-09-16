import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
   loginPage: {
      backgroundColor: '#263238',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   container: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(4),
      backgroundColor: theme.palette.background.paper,
      boxShadow: '5px 5px 2px #1B2327',
      display: 'flex',
      flexDirection: 'column',
   },
   title: {
      alignSelf: 'center',
      margin: 0,
      marginBottom: theme.spacing(2),
      color: '#5F5F5F',
      fontWeight: 300,
   },
   form: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
   },
   textField: {
      backgroundColor: '#ECEFF1',
   },
   loginButton: {
      marginTop: theme.spacing(1),
      alignSelf: 'center',
   },
}));

export default useStyles;
