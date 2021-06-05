import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Form1, Form2, Form3, Form4 } from '.';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const SimpleTabs = ({ value, handleChange }) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        <Form1 handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Form2 handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Form3 handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Form4 handleChange={handleChange} />
      </TabPanel>
    </>
  );
};
export default SimpleTabs;
