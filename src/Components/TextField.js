import SimpleTextField from '@material-ui/core/TextField';
const TextField = ({ formik, name, ...props }) => {
  return (
    <SimpleTextField
      {...props}
      fullWidth
      variant='outlined'
      id={name}
      name={name}
      type='text'
      value={formik.values[`${name}`]}
      onChange={formik.handleChange}
      error={formik.touched[`${name}`] && Boolean(formik.errors[`${name}`])}
      helperText={formik.touched[`${name}`] && formik.errors[`${name}`]}
    />
  );
};

export default TextField;
