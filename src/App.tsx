import './App.css';
import { Box, Container, CssBaseline, Tab, Tabs, Typography } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import { Services } from './pages/Services';
import { About } from './pages/About';
import Contact from './pages/Contact';
import { Home } from './pages/Home';

function CustomTabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [tab, setTab] = React.useState(0);
  const handleChange = (event: SyntheticEvent<Element, Event>, newValue: React.SetStateAction<number>) => {
    setTab(newValue);
  };

  return (
    <CssBaseline>
      <Container>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="AchaemenidBrothers" />
            <Tab label="Services" />
            {/* <Tab label="About" /> */}
            <Tab label="Contact" />
          </Tabs>
          <Typography sx={{ ml: 'auto', p: 2 }}>
            CALL US: 123-456-7890
          </Typography>
        </Box>
        <CustomTabPanel value={tab} index={0}><Home /></CustomTabPanel>
        <CustomTabPanel value={tab} index={1}><Services /></CustomTabPanel>
        {/* <CustomTabPanel value={tab} index={2}><About /></CustomTabPanel> */}
        <CustomTabPanel value={tab} index={2}><Contact /></CustomTabPanel>
      </Container>
    </CssBaseline>
  );
}

export default App;
