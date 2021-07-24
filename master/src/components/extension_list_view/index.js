import React, { useEffect } from 'react';
import './index.less';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { useSelector } from 'react-redux';
import { addPlugin, removePlugin, updatePluginObject, selectPluginList, getPluginList, getPluginProductPage } from '@/features/plugin';
import { useDispatch } from 'react-redux';

const StyledList = withStyles((theme) => ({
    root: {
        width: '100%',
        color: 'white',
    },
}))(List);
const StyledListItem = withStyles((theme) => ({
    root: {
        padding: '3px 10px 0px 10px',
    },
}))(ListItem);

export default function ExtensionListView() {
    const dispatch = useDispatch();
    const pluginList = useSelector(selectPluginList);
    useEffect(() => {
        dispatch(getPluginList());
      }, []);
    return (
        <div className="plugin-list-view">
            <StyledList>
                {
                    pluginList.map((plugin, _index) => {
                        const { id, type, name, version, description, author, enabled } = plugin;
                        return (
                            <StyledListItem key={_index} role={undefined} button onClick={() => dispatch(getPluginProductPage(id))}>
                                <ListItemIcon>
                                    <Avatar />
                                </ListItemIcon>
                                <div className="plugin-info-wraper">
                                    <div className="info-header"><span className="info-name">{name}</span><span className="info-version">{version}</span></div>
                                    <div className="info-content">{description}</div>
                                    <div className="info-author">{author}</div>
                                </div>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="comments">
                                        <CommentIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </StyledListItem>
                        );
                    })
                }
            </StyledList>
        </div>
    );
}