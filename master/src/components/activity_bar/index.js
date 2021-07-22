import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { withStyles } from '@material-ui/core/styles';
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Tab/Tab.js
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useDispatch, useSelector } from "react-redux";
import { selectActivityIndex, changeActivityIndex } from "@/features/activity_bar";

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
}, { name: "CustomTabs" })(Tabs);
const CustomTab = withStyles({
  root: {
    padding: '0 0 0 5px',
    minWidth: 0,
    fontSize: '20px'
  },
  wrapper: {
    color: "white",
  }
}, { name: "CustomTab" })(Tab);

function ActivityBar(props) {
  const dispatch = useDispatch();
  const activityIndex = useSelector(selectActivityIndex);
  const handleChange = (event, newValue) => {
    dispatch(changeActivityIndex(newValue));
  };

  const enlargeIcon = (element) => {
    return withStyles({
      root: {
        fontSize: 'large'
      },
    }, { name: "large-icon" })(element);
  };
  return <div className="activity-bar">
    <CustomTabsGroup
      defaultValue={0}
      orientation="vertical"
      variant="standard"
      value={activityIndex} onChange={handleChange} aria-label="simple tabs example">
      {
        props.activityGroup.map((activityItem, _ind) => {
          const en = enlargeIcon(activityItem.icon)
          return <CustomTab
            icon={<activityItem.icon style={{ fontSize: '30px', padding: 10 }} />}
            // label={activityItem.description} 
            aria-label={activityItem.title}
            key={_ind}
            disableRipple
            {...a11yProps(_ind)} />
        })
      }
    </CustomTabsGroup>
  </div>
}

export default ActivityBar;