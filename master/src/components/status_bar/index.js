import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import SyncIcon from '@material-ui/icons/Sync';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSyncing, setStatistic, pushNewNotification, selectIsSyncing, selectStatistic, selectNotifications } from '@/features/status_bar';


function StatusBar(props) {
    const dispatch = useDispatch();
    const isSyncing = useSelector(selectIsSyncing);
    const statisticStatus = useSelector(selectStatistic);
    const notifications = useSelector(selectNotifications);

    return <div className="status-bar">
        <div className="groups-wrapper">
            <ul className="button-group docker-left">
                <li onClick={() => dispatch(setIsSyncing(!isSyncing))}><SyncIcon className={isSyncing?"rotating-progress":null} /></li>
                <li><HighlightOffOutlinedIcon /><span>{statisticStatus.error}</span></li>
                <li><ReportProblemOutlinedIcon /><span>{statisticStatus.warn}</span></li>
            </ul>
            <ul className="button-group docker-right">
                <li><NotificationsActiveOutlinedIcon /><span>{notifications.length}</span></li>
            </ul>
        </div>
    </div>
}

export default StatusBar;