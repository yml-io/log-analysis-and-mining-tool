import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Tab/Tab.js
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
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
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const CustomTabsGroup = withStyles({
    root: {
    //   flexGrow: 1,
      padding: '0',
    },
    indicator: {
        backgroundColor: 'white',
        left: 0,
    }
  }, {name: "CustomTabs"})(Tabs);
  const CustomTab = withStyles({
    root: {
      padding: '0 0 0 5px',
      minWidth: 0,
      fontSize: '20px'
    },
    wrapper: {
        color: "white",
    }
  }, {name: "CustomTab"})(Tab);

function ActivityBar(props){
    // const tabsClasses = tabsUseStyles();
    const [value, setValue] = React.useState(0);

    // const tabItemClasses = tabItemUseStyles();
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const enlargeIcon = (element) => {
      return withStyles({
        root: {
          fontSize: 'large'
        },
      }, {name: "large-icon"})(element);
    };
    return <div className="activity-bar">
        <CustomTabsGroup
        // classes={{root: tabsClasses.root}}
        orientation="vertical"
        variant="standard"
        value={value} onChange={handleChange} aria-label="simple tabs example">
        {
            props.activityGroup.map((activityItem, _ind) => {
                const en = enlargeIcon(activityItem.icon)
                return <CustomTab 
                icon={<activityItem.icon style={{fontSize:'30px', padding: 10}}/>}
                // label={activityItem.description} 
                aria-label={activityItem.title} 
                key={_ind} 
                {...a11yProps(_ind)} />
            })
        }
        </CustomTabsGroup>
      {/* <TabPanel value={value} index={0}>
        Item One111
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </div>
}

export default ActivityBar;