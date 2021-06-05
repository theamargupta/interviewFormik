import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = ({ formik, name, label, options, ...props }) => {
  const classes = useStyles();

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel id='demo-simple-select-outlined-label'>
        Enter Car type
      </InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id={name}
        name={name}
        label={label}
        value={formik.values[`${name}`]}
        onChange={formik.handleChange}
        error={formik.touched[`${name}`] && Boolean(formik.errors[`${name}`])}
        helperText={formik.touched[`${name}`] && formik.errors[`${name}`]}
        
      >
        {options.map(({ value, title }) => (
          <MenuItem value={value}>{title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SimpleSelect;
