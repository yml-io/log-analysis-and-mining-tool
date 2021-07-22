import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DirectoryTreeView from '@/components/directory_tree_view';
import SearchTreeView from '@/components/search_tree_view';
import ExtensionListView from '@/components/extension_list_view';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from "react-redux";
import { selectActivityIndex, selectCurrentActivity } from "@/features/activity_bar";

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
          <Typography>{children}</Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const moreButtonUseStyles = makeStyles({
  root: {
    color: "white",
    padding: 0,
  },
});

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

function ActivityPreview(props) {
  const activityIndex = useSelector(selectActivityIndex);
  const currentActivity = useSelector(selectCurrentActivity);
  const mainTitle = currentActivity.title || "ACTIVITY PREVIEW";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <div className="activity-preview">
    <div className="preview-header">
      <span className="text-wrapper">{mainTitle}</span>
      <span className="detail-button">
        <IconButton
          classes={{ root: moreButtonUseStyles().root }}
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          // PaperProps={{
          //   style: {
          //     maxHeight: ITEM_HEIGHT * 4.5,
          //     width: '20ch',
          //   },
          // }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </span>
    </div>
    <a className="preview-body">
      <TabPanel value={activityIndex} index={0}>
        <DirectoryTreeView />
      </TabPanel>
      <TabPanel value={activityIndex} index={1}>
        <SearchTreeView />
      </TabPanel>
      <TabPanel value={activityIndex} index={2}>
        <ExtensionListView />
      </TabPanel>
    </a>

  </div>
}

export default ActivityPreview;