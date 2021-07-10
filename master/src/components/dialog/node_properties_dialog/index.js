import React from 'react';
import {PropTypes}  from 'prop-types';
import './index.less';
import { withStyles, makeStyles } from '@material-ui/core';

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentNode, setShowPropertiesDilog, updateNodeDataObject } from "@/features/node_tree";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { FixedSizeList } from 'react-window';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';
import ListSubheader from '@material-ui/core/ListSubheader';
import {PluginSettings} from '@/settings/ui/plugin';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import UploadButton from '@/components/upload_button';
import Input from '@material-ui/core/Input';


function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const StyledDialogTitle = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        color: 'white',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}))((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
            </IconButton>
        ) : null}
        </MuiDialogTitle>
    );
});

const StyledDialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const StyledDialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const StyledRadioGroup = withStyles((theme) => ({
  root: {
      display: 'inline-block',
      color: 'white',
  },
}))(RadioGroup);

// const stickyListStyle = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     // backgroundColor: theme.palette.background.paper,
//     backgroundColor: 'rgba(27, 44, 73, 0.95)',
//     position: 'relative',
//     overflow: 'auto',
//     maxHeight: 300,
//   },
//   listSection: {
//     backgroundColor: 'inherit',
//   },
//   ul: {
//     backgroundColor: 'inherit',
//     padding: 0,
//   },
// }));
const StyledList = withStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(27, 44, 73, 0.95)',
    color: 'white',
  },
}))(List);


// renderPlugins.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired,
// };

export default function NodePropertiesDialog(props) {
    const { isOpenDialig, handleCloseCallback, ...other } = props;
    const currentTreeNode = useSelector(selectCurrentNode);
    const dispatch = useDispatch();

    // sue multi field to store form data, divide busniess point
    const [nodeLabelText, setNodeLabelText] = React.useState(currentTreeNode.labelText || "");
    const [nodeType, setNodeType] = React.useState(currentTreeNode.nodeType || "Text File");
    const [nodeDetailType, setNodeDetailType] = React.useState(currentTreeNode.nodeDetailType || "Time Series");
    const [checkedPlugin, setCheckedPlugin] = React.useState(currentTreeNode.checkedPlugin || []);

    // const radioGroupRef = React.useRef(null);

    // React.useEffect(() => {
    //     if (!isOpenDialig) {
    //       setNodeType(valueProp);
    //     }
    // }, [valueProp, open]);


    const handleToggle = (pluginId) => () => {
      const currentIndex = checkedPlugin.indexOf(pluginId);
      const newChecked = [...checkedPlugin];
      if (currentIndex === -1) {
        newChecked.push(pluginId);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setCheckedPlugin(newChecked);
    };
    const onClickSave = () => {
      console.log('save perp');
      const newProperties = {
        labelText: nodeLabelText,
        nodeType: nodeType,
        nodeDetailType: nodeDetailType,
        checkedPlugin: checkedPlugin,
      };
      dispatch(updateNodeDataObject(newProperties));
      dispatch(setShowPropertiesDilog(false));
      handleCloseCallback(newProperties);
    };
    const onClickCancel = (event) => {
      console.log('force close window');
      dispatch(setShowPropertiesDilog(false));
      handleCloseCallback(null);
    };
    
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          maxWidth: 380,
        },
        paper: {
          width: '80%',
          maxHeight: 500,
          backgroundColor: 'rgba(27, 44, 73, 0.95)',
        },
      }));
    const classes = useStyles();
    return (
        <Dialog
            classes={{paper: classes.paper,}}
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            // onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={isOpenDialig} 
            // onClose={onClickCancel}
            PaperComponent={PaperComponent}
            // value={nodeType}
            {...other}
            >
            <StyledDialogTitle id="draggable-dialog-title" style={{ cursor: 'move'}} onClose={() => onClickCancel()}>Node Properties</StyledDialogTitle>
            <StyledDialogContent dividers>
            <FormControl fullWidth>
              <InputLabel htmlFor="node-label-text" style={{fontSize: '17px', color: 'white'}}>Label Text</InputLabel>
              <Input
                id="node-label-text"
                value={nodeLabelText}
                style={{color: 'white'}}
                onChange={(e) => setNodeLabelText(e.target.value)}
                // startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
            <StyledRadioGroup
                // ref={radioGroupRef}
                aria-label="node type"
                name="ringtone"
                value={nodeType}
                onChange={(e) => setNodeType(e.target.value)}
                >
                {["Text File", "Binary File", "Virtual Node"].map((option) => (
                    <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                ))}
            </StyledRadioGroup>
            {(nodeType == 'Text File') ? 
            (<Paper style={{backgroundColor: 'rgba(27, 44, 73, 0.95)'}}>
              {/* <List className={stickyListStyleClasses.root} subheader={<li />}>
                {[0, 1, 2, 3, 4].map((sectionId) => (
                  <li key={`section-${sectionId}`} className={stickyListStyleClasses.listSection}>
                    <ul className={stickyListStyleClasses.ul}>
                      <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                      {[0, 1, 2].map((item) => (
                        <ListItem key={`item-${sectionId}-${item}`}>
                          <ListItemText primary={`Item ${item}`} />
                        </ListItem>
                      ))}
                    </ul>
                  </li>
                ))}
              </List> */}


              <StyledRadioGroup
                // ref={radioGroupRef}
                aria-label="node type"
                name="SubCategory for Text File"
                value={nodeDetailType}
                onChange={(e) => {setNodeDetailType(e.target.value)}}
                // disable={true}
                >
                {["Time Series", "Code", "Unstructured"].map((option) => (
                    <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                ))}
              </StyledRadioGroup> 
              <DialogContentText>
              <UploadButton text="Select File" />
              {/* <TextField
                autoFocus
                margin="dense"
                id="name"
                label="url"
                type="url"
                fullWidth
                style={{color: 'white'}}
              /> */}
            </DialogContentText>
            {/* <FixedSizeList height={600} width={500} itemSize={400} itemCount={1}> */}
              <StyledList>
                {/* <ListItemText primary={`Item ${index + 1}`} /> */}
                {
                  PluginSettings.map((pluginInfo, _index) => {
                    const labelId = `checkbox-list-label-${_index}`;
                    return (
                      <ListItem key={_index} role={undefined}  button onClick={handleToggle(pluginInfo.id)}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checkedPlugin.indexOf(pluginInfo.id) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${pluginInfo.text}`} />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="comments">
                            <CommentIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  })
                }
              </StyledList>
            </Paper>) : null}

            </StyledDialogContent>
            <StyledDialogActions>
                <Button autoFocus onClick={onClickCancel} style={{color: 'white'}} disableRipple>
                  Cancel
                </Button>
                <Button onClick={onClickSave} style={{color: 'white'}} disableRipple>
                  Save
                </Button>
            </StyledDialogActions>
        </Dialog>
    );
}

NodePropertiesDialog.propTypes = {
    // onClose: PropTypes.func.isRequired,
    // open: PropTypes.bool.isRequired,
    // value: PropTypes.string.isRequired,
};
