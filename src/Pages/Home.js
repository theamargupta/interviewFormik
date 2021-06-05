import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { Header, SimpleTabs } from '../Components';
import { useStyles } from './homeStyle';

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item className={classes.header}>
        <Header step={Number(value) + 1} />
      </Grid>
      <Grid item className={classes.form}>
        <SimpleTabs value={value} handleChange={handleChange} />
      </Grid>
    </Grid>
  );
};

export default Home;
