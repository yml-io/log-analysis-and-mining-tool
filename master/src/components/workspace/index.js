import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import DocumentViewer from "@/components/document_viewer";
import CompositionPanel from "@/components/composition_panel";

function Workspace(props){
    return <div className="workspace">
        <div className="workspace-docker-top">
            <DocumentViewer />
        </div>
        <div className="workspace-docker-bottom">
            <CompositionPanel />
        </div>
    </div>
}

export default Workspace;