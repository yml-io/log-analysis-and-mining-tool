import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import "./main.less";
import NavigatorBar from "@/components/navigation_bar";
import ToolBar from "@/components/tool_bar";
import ResourceExplorer from "@/components/resource_explorer";
import Workspace from "@/components/workspace";
import StatusBar from "@/components/status_bar";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return <div className="main-page">
            <div className="panel-top">
                <NavigatorBar />
                {/* <ToolBar /> */}
            </div>
            <div className="panel-center">
                <div className="dock-left">
                    <ResourceExplorer />
                </div>
                <div className="dock-right">
                    <Workspace />
                </div>
            </div>
            <div className="panel-bottom">
                <StatusBar />
            </div>
        </div>
    }
}

export default MainPage;