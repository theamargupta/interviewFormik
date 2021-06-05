import { Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import { TextField, Button, SimpleSelect } from '../index';
import { initialValues, validationSchema, options } from './helper';

const WithMaterialUI = ({ handleChange }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleChange(3);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              formik={formik}
              name='sourceLocation'
              label='Source Location'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField formik={formik} name='destination' label='Destination' />
          </Grid>
          <Grid item xs={12}>
            <SimpleSelect
              formik={formik}
              name='enterCarType'
              label='Enter Car type'
              options={options}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              formik={formik}
              name='travelers'
              label='Number of Travelers'
            />
          </Grid>

          <Button title={'submit'} />
        </Grid>
      </form>
    </div>
  );
};

export default WithMaterialUI;
