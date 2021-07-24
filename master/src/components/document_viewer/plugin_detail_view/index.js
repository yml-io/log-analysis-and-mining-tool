import React from "react";
import ReactDOM from "react-dom";
export default function PluginDetailView (props) {
    const htmlComponent = props.view;
    return <div className="diagram-table">
        <div dangerouslySetInnerHTML = {{ __html: htmlComponent }} />
    </div>
}