import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TreeNodeContextMenu from '@/components/directory_tree/tree_node_context_menu';

import { useDispatch, useSelector } from "react-redux";
import { selectTreeData, switchSelectNodeById } from "@/features/node_tree";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MailIcon from "@material-ui/icons/Mail";


const useTreeItemStyles = makeStyles((theme) => ({
  // root: {
  //   color: theme.palette.text.secondary,
  //   '&:hover > $content': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  //   '&:focus > $content, &$selected > $content': {
  //     backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
  //     color: 'var(--tree-view-color)',
  //   },
  //   '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
  //     backgroundColor: 'transparent',
  //   },
  // },
  // content: {
  //   // color: theme.palette.text.secondary,
  //   // borderTopRightRadius: theme.spacing(2),
  //   // borderBottomRightRadius: theme.spacing(2),
  //   paddingRight: theme.spacing(1),
  //   fontWeight: theme.typography.fontWeightMedium,
  //   '$expanded > &': {
  //     fontWeight: theme.typography.fontWeightRegular,
  //   },
  // },
  // group: {
  //   marginLeft: 0,
  //   '& $content': {
  //     paddingLeft: theme.spacing(2),
  //   },
  // },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(.5),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
    fontSize: '12px',
    backgroundColor: 'transparent',
  },
  labelInfo: {
    position: 'absolute',
    right: 10,
    fontSize: '5px'
  }
}));

function StyledTreeItem(props) {

   // context menu holded in tree item
  const initialState = {
    mouseX: null,
    mouseY: null,
  };
  const [menuPosition, setMenuPosition] = React.useState(initialState);
  const handleRightClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target);
    setMenuPosition({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };
  const handleClose = () => {
    setMenuPosition(initialState);
  };

  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (<div className="directory-tree-node">
    <TreeItem
    onContextMenu={handleRightClick} 
    style={{ cursor: 'context-menu' }}
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            <span style={{color: color, backgroundColor: bgColor}}>{labelText}</span>
          </Typography>
          <Typography variant="caption" className={classes.labelInfo} color="inherit" >
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
    <TreeNodeContextMenu handlerCallback={handleClose} mouseX={menuPosition.mouseX} mouseY={menuPosition.mouseY}/>
    </div>
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired
};


const StyledTreeView = withStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
        color: 'rgb(230, 220, 230)',
      },
}, {name: "styled-tree-view"})(TreeView);

function DirectoryTree() {
  const treeData = useSelector(selectTreeData);
  const dispatch = useDispatch();

  const renderTree = (nodes) => {
     return <StyledTreeItem 
          key={nodes.id} 
          nodeId={nodes.id} 
          // label={nodes.labelText} bug!
          labelText={nodes.labelText}
          labelIcon={MailIcon}
          labelInfo={nodes.nodeType || ""}
          color={nodes.color}
          bgColor={nodes.bgColor}>
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : undefined}
      </StyledTreeItem>
  };
  const treeContent = renderTree(treeData);
  return (
    <div className="directory-tree">
      <StyledTreeView
        defaultExpanded={["root"]}
        defaultSelected={["root"]}
        onNodeSelect={(event, nodeId)=>dispatch(switchSelectNodeById(nodeId))}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
      {treeContent}
      </StyledTreeView>
    </div>
  );
}

export default DirectoryTree;