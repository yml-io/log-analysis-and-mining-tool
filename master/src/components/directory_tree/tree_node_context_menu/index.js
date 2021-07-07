import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.less";
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    appendNode,
    removeNodeTree,
    updateNodeDataObject,
    selectCurrentNode,
} from '@/features/node_tree';
import { useDispatch, useSelector } from "react-redux";
import NodePropertiesDialog from '@/components/dialog/node_properties_dialog';

const StyledMenu = withStyles({
    paper: {
        backgroundColor: 'rgba(27, 44, 73, 0.95)',
    },
}, {name: "styled-menu"})(Menu);

const StyledMenuItem = withStyles({
    root: {
        color: 'rgb(255,255,255)',
    },
}, {name: "styled-menu-item"})(MenuItem);



export default function TreeNodeContextMenu(props) {
    const {mouseX, mouseY, handlerCallback} = props;
    const [showPropDialog, setShowPropDialog] = useState(false);
    const dispatch = useDispatch();
    let currentSelectedNode = useSelector(selectCurrentNode);

    const onCloseCallback = (saveData) => {
        if (saveData) {
            const { labelText, nodeType, nodeDetailType, checkedPlugin } = saveData;
            const updateObject = {
                labelText: labelText,
                nodeType: nodeType,
                nodeDetailType: nodeDetailType,
                checkedPlugin: checkedPlugin,
            };
            dispatch(updateNodeDataObject(updateObject));
        }
        setShowPropDialog(false);
    };
    return (<div className="node-context-menu">
        <StyledMenu
        // keepMounted
        open={mouseY !== null}
        onClose={handlerCallback}
        anchorReference="anchorPosition"
        anchorPosition={
            mouseY !== null && mouseX !== null
            ? { top: mouseY, left: mouseX }
            : undefined
        }
        >
        <StyledMenuItem onClick={() => {dispatch(appendNode()); handlerCallback();}}>Add Node</StyledMenuItem>
        <StyledMenuItem onClick={handlerCallback}>Copy</StyledMenuItem>
        <StyledMenuItem onClick={handlerCallback}>Paste</StyledMenuItem>
        <StyledMenuItem onClick={handlerCallback}>Build Node</StyledMenuItem>
        <StyledMenuItem onClick={() => {dispatch(removeNodeTree()); handlerCallback();}}>Delete</StyledMenuItem>
        <StyledMenuItem onClick={() => {dispatch(updateNodeDataObject({bgColor: "rgba(250, 250, 50, .5)"})); handlerCallback();}}>Highlight</StyledMenuItem>
        <StyledMenuItem onClick={() => {setShowPropDialog(true); handlerCallback()}}>Properties</StyledMenuItem>
        </StyledMenu>
        {/* this will mounted this component when the context menu not closed */}
        <NodePropertiesDialog isOpenDialig={showPropDialog} handleCloseCallback={onCloseCallback} nodeInfo={currentSelectedNode} />
    </div>);
}