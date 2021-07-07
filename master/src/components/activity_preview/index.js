import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DirectoryTree from '@/components/directory_tree';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade';


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

function ActivityPreview(props){
  const mainTitle = props.title || "ACTIVITY PREVIEW";
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
              classes={{root: moreButtonUseStyles().root}}
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
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
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
          <DirectoryTree />
        </a>
               
    </div>
}

export default ActivityPreview;