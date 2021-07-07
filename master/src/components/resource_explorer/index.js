import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import ActivityBar from "@/components/activity_bar";
import ActivityPreview from "@/components/activity_preview";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';

class ResourceExplorer extends React.Component {
    render() {
        const activityList = [
            {
                description: "File",
                icon: DescriptionOutlinedIcon
            },
            {
                description: "Search",
                icon: SearchOutlinedIcon
            },
            {
                description: "Extension",
                icon: ExtensionOutlinedIcon
            }
        ];
        return <div className="resource-explorer">
            <div className="dock-left">
                <ActivityBar activityGroup={activityList}/>
                </div>
                <div className="dock-right">
                    <ActivityPreview />
                    </div>
            </div>
    }
}

export default ResourceExplorer;