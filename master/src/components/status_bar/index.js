import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

function StatusBar(props){
    return <div className="status-bar">
            <div className="groups-wrapper">
                <ul className="button-group docker-left">
                    <li>目录树和内容刷新 circleProgress</li>
                    <li>设置自动保存静态图标</li>
                    <li>错误和警告数量</li>
                </ul>
                <ul className="button-group docker-right">
                    <li>位置信息</li>
                    <li>notification 列表</li>
                </ul>
            </div>
        </div>
}

export default StatusBar;