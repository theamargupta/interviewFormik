import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    height: '20vh',
    width: '100%',
    background: '#08123B',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    height: '60vh',
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
