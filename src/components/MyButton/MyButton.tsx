import { Button, ButtonProps, makeStyles } from '@material-ui/core';
import cx from 'classnames';

interface Props extends ButtonProps {}

const MyButton: React.FC<Props> = ({ children, className, ...props }) => {
   const styles = useStyles();

   return (
      <Button
         {...props}
         variant='contained'
         disableElevation
         className={cx(styles.button, className)}
      >
         {children}
      </Button>
   );
};

const useStyles = makeStyles(theme => ({
   button: {
      padding: theme.spacing(0.5),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
   },
}));

export default MyButton;
