import * as yup from 'yup';
export const validationSchema = yup.object({
  sourceLocation: yup
    .string('Enter Source Location')
    .required('Source Location is required'),
  destination: yup
    .string('Enter Destination')
    .required('Destination is required'),
  travelers: yup
    .number('Enter No. of Travellers')
    .required('No. of Travellers is required'),
  enterCarType: yup.string('Enter Car type').required('Car type is required'),
});
export const initialValues = {
  sourceLocation: 'Delhi',
  destination: 'Chennai',
  travelers: 5,
  enterCarType: '10',
};
export const options = [
  { value: '10', title: 'HatchBack' },
  { value: '20', title: 'SUV' },
  { value: '30', title: 'Sedan' },
];
