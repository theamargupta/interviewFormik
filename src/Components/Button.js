import FullButton from '@material-ui/core/Button';
const Button = ({ title }) => {
  return (
    <FullButton color='primary' variant='contained' fullWidth type='submit'>
      {title}
    </FullButton>
  );
};

export default Button;
