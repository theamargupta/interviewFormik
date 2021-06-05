import { Typography } from '@material-ui/core';

const Header = ({ step }) => {
  return (
    <Typography variant='h4'>{`Place you Bid(${step}/4 step)`}</Typography>
  );
};

export default Header;
