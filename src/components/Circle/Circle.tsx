import { makeStyles } from '@material-ui/core';
import cx from 'classnames';

interface Props {
   className?: React.HTMLAttributes<HTMLDivElement>['className'];
}

const Circle: React.FC<Props> = ({ className }) => {
   const styles = useStyles();

   return <div className={cx(styles.circle, className)} />;
};

const useStyles = makeStyles(theme => ({
   circle: {
      position: 'relative',
      width: 60,
      height: 60,
      borderRadius: '50%',
      backgroundColor: theme.palette.background.default,
   },
}));

export default Circle;
