import React from 'react';
import { PropTypes } from 'prop-types';
import './index.less';
import { withStyles, makeStyles } from '@material-ui/core';

import { useDispatch, useSelector } from "react-redux";
import { addKeywords, removeKeywords, setShowAddKeywordDialog }  from "@/features/search_structure";

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
import { PluginSettings } from '@/settings/ui/plugin';
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

export default function AddKeywordDialog(props) {
  const { isOpenDialig, handleCloseCallback, ...other } = props;
  const dispatch = useDispatch();

  // sue multi field to store form data, divide business point
  const [categoryName, setCategoryName] = React.useState("");
  const [keywords, setKeywords] = React.useState("");

  const multiLineRef = React.useRef(null);

  // React.useEffect(() => {
  //     if (!isOpenDialig) {
  //       setNodeType(valueProp);
  //     }
  // }, [valueProp, open]);

  const onClickSave = () => {
    const newKeywordGroup = {
      categoryName,
      keywords,
    };
    dispatch(addKeywords(newKeywordGroup));
    handleCloseCallback(newKeywordGroup);
  };
  const onClickCancel = (event) => {
    dispatch(setShowAddKeywordDialog(false));
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
      classes={{ paper: classes.paper, }}
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
      <StyledDialogTitle id="draggable-dialog-title" style={{ cursor: 'move' }} onClose={() => onClickCancel()}>Create Search Keyword</StyledDialogTitle>
      <StyledDialogContent dividers>
        <FormControl fullWidth>
          <InputLabel htmlFor="node-label-text" style={{ fontSize: '17px', color: 'white' }}>Category Name</InputLabel>
          <Input
            id="category-text"
            value={categoryName}
            style={{ color: 'white' }}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <TextField
            id="keyword-multiline"
            label="Multiline"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            multiline
            rows={4}
            defaultValue="Multiple Keyword delimitered in new line"
            variant="outlined"
            ref={multiLineRef}
          />
        </FormControl>

      </StyledDialogContent>
      <StyledDialogActions>
        <Button autoFocus onClick={onClickCancel} style={{ color: 'white' }} disableRipple>
          Cancel
        </Button>
        <Button onClick={onClickSave} style={{ color: 'white' }} disableRipple>
          Save
        </Button>
      </StyledDialogActions>
    </Dialog>
  );
}

AddKeywordDialog.propTypes = {
  // onClose: PropTypes.func.isRequired,
  // open: PropTypes.bool.isRequired,
  // value: PropTypes.string.isRequired,
};
