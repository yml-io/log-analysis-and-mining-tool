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
import TreeNodeContextMenu from '@/components/tree_node_context_menu';
import NodePropertiesDialog from '@/components/dialog/node_properties_dialog';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useDispatch, useSelector } from "react-redux";
import { selectTreeData, selectCurrentId, switchSelectNodeById, setNodeTreeContextMenu, } from "@/features/node_tree";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MailIcon from "@material-ui/icons/Mail";
import { selectShowPropertiesDilog, selectContextMenu } from "../../features/node_tree";



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
  const classes = useTreeItemStyles();
  const { nodeDataId, labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
  const dispatch = useDispatch();
  const handleRightClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    const rightClickNodeText = event.target.dataset.nodeId;
    
    dispatch(switchSelectNodeById(rightClickNodeText));
    dispatch(setNodeTreeContextMenu({
      show: true,
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    }));
  };
  
  return (<div className="directory-tree-node">
    <TreeItem
    onContextMenu={handleRightClick} 
    style={{ cursor: 'context-menu' }}
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            <span style={{color: color, backgroundColor: bgColor}} data-node-id={nodeDataId}>{labelText}</span>
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

function DirectoryTreeView() {
  const treeData = useSelector(selectTreeData);
  const currentSelectedNodeId = useSelector(selectCurrentId);
  const dispatch = useDispatch();
  const contextMenu = useSelector(selectContextMenu);
  const showPropertiesDialog = useSelector(selectShowPropertiesDilog);
  const handleContextMenuClose = () => {
    console.log("call back from context menu");
  };
  const handlePropertiesDialogClose = () => {
    console.log("call back from context menu");
  };


  const renderTree = (nodes) => {
     return <StyledTreeItem 
          key={nodes.id} 
          nodeId={nodes.id} 
          nodeDataId={nodes.id+""}
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
        defaultExpanded={[currentSelectedNodeId]}
        defaultSelected={[currentSelectedNodeId]}
        selected={currentSelectedNodeId}
        onNodeSelect={(event, nodeId)=>dispatch(switchSelectNodeById(nodeId))}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        
        defaultEndIcon={<div style={{ width: 54 }} />}
      >
      {treeContent}
      </StyledTreeView>

      {(contextMenu.show)?<TreeNodeContextMenu handlerCallback={handleContextMenuClose} />:null}
      {(showPropertiesDialog)?<NodePropertiesDialog isOpenDialig={showPropertiesDialog} handleCloseCallback={handlePropertiesDialogClose} />:null}
    </div>
  );
}

export default DirectoryTreeView;