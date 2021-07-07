import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import {selectActivedDocInd} from '@/features/document_set';

import {NavigationSetting} from '@/settings/ui/navigation';
import "./index.less";

function NavigatorBar(props){
    const dispatch = useDispatch();
    return <div className="navigation-bar">
        <div className="padding-start"></div>
        <div className="menu-group">
            {
                NavigationSetting.map((element, _ind) => {
                    return <a className="menu-button" title={element.tip} key={_ind}>
                        {element.text}
                        <div className="menu-content">
                            {element.subMenu?
                            element.subMenu.map((subElement, _subInd) => {
                                if (Object.getOwnPropertyNames(subElement).length > 0)
                                console.log(subElement.action)
                                return (<div className="menu-sub-button" key={_subInd} onClick={(subElement.action) ? (e) => {dispatch(subElement.action());} : null}>
                                    <span>{subElement.text}</span>
                                    <span>{subElement.hotkey}</span>
                                    </div>)
                                return <div className="menu-sub-divider" key={_subInd}></div>
                            })
                            :null}
                        </div>
                    </a>
                })
            }
        </div>
        <div className="padding-end"></div>
    </div>
}

export default NavigatorBar;