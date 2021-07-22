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
    selectContextMenu,
    setShowPropertiesDilog,
} from '@/features/node_tree';
import { buildSelectedTask } from '@/features/build_profile';
import { useDispatch, useSelector } from "react-redux";
import NodePropertiesDialog from '@/components/dialog/node_properties_dialog';
import { setNodeTreeContextMenu, } from "@/features/node_tree";

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
    const { handlerCallback } = props;
    // const [showPropDialog, setShowPropDialog] = useState(false);
    const dispatch = useDispatch();
    const currentSelectedNode = useSelector(selectCurrentNode);
    const contextMenu = useSelector(selectContextMenu);

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
        // close self
        dispatch(setNodeTreeContextMenu({
            show: false,
            mouseX: null,
            mouseY: null,
        }));
    };
    return (<div className="node-context-menu">
        <StyledMenu
        // keepMounted  contextMenuPosition.mouseX !== null && montextMenuPosition.mouseY !== null
        onClick={()=>{
            dispatch(setNodeTreeContextMenu({show:false}))
        }}
        open={ contextMenu.show }
        onClose={handlerCallback}
        anchorReference="anchorPosition"
        anchorPosition={
            contextMenu.mouseY !== null && contextMenu.mouseX !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        >
        <StyledMenuItem onClick={() => {dispatch(appendNode()); handlerCallback();}}>Add Node</StyledMenuItem>
        <StyledMenuItem onClick={handlerCallback}>Copy</StyledMenuItem>
        <StyledMenuItem onClick={handlerCallback}>Paste</StyledMenuItem>
        <StyledMenuItem onClick={() => {dispatch(buildSelectedTask()); handlerCallback();}}>Build Node</StyledMenuItem>
        <StyledMenuItem onClick={() => {dispatch(removeNodeTree()); handlerCallback();}}>Delete</StyledMenuItem>
        <StyledMenuItem onClick={() => {dispatch(updateNodeDataObject({bgColor: "rgba(250, 250, 50, .5)"})); handlerCallback();}}>Highlight</StyledMenuItem>
        <StyledMenuItem onClick={() => {dispatch(setShowPropertiesDilog(true)); handlerCallback()}}>Properties</StyledMenuItem>
        </StyledMenu>

    </div>);
}