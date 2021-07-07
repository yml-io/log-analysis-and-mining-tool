import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutputPanel from '@/components/panel/output_panel';
import ProblemPanel from '@/components/panel/problem_panel';
import TerminalPanel from '@/components/panel/terminal_panel';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledTabs = withStyles({
    root: {
        backgroundColor: 'rgb(0,36,81)',
        minHeight: 0,
        borderTop: 'solid 1px rgb(45,68,98)'
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'rgb(250,250,250)',
      '& > span': {
        // maxWidth: 40,
        // width: '100%',
        // backgroundColor: '#635ee7',
        backgroundColor: 'rgb(250,250,250)',
      },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: 'rgb(150,150,150)',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(10),
        marginRight: theme.spacing(1),
        minWidth: 0,
        minHeight: 0,
        padding: '5px 10px',
        '&:focus': {
            color: 'rgb(250,250,250)',
        },
        '&:hover': {
            color: 'rgb(250,250,250)',
        },
    },
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}



function CompositionPanel() {
  const [value, setValue] = React.useState('OUTPUT');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<div className="composition-panel">
        <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="panels tabs"
        >
        {/* <StyledTab label="Disabled" disabled /> */}
            <StyledTab value="OUTPUT" label="OUTPUT" wrapped {...a11yProps('OUTPUT')} />
            <StyledTab value="PROBLEM" label="PROBLEM" {...a11yProps('PROBLEM')} />
            <StyledTab value="TERMINAL" label="TERMINAL" {...a11yProps('TERMINAL')} />
        </StyledTabs>
        <div className="panel_container">
            <TabPanel value={value} index="OUTPUT">
                <OutputPanel />
            </TabPanel>
            <TabPanel value={value} index="PROBLEM">
                <ProblemPanel />
            </TabPanel>
            <TabPanel value={value} index="TERMINAL">
                <TerminalPanel />
            </TabPanel>
        </div>
    </div>
  );
}

export default CompositionPanel;