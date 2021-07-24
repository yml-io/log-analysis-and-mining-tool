import React from "react";
import ReactDOM from "react-dom";
import './index.less';

export default function SearchResultView(props) {
    const resultItems = props.view;
    return <div className="search-result-list">
        <ul>
            {
                resultItems.map(item => {
                    return <li>{item._source.message}</li>
                })
            }
        </ul>
    </div>
}