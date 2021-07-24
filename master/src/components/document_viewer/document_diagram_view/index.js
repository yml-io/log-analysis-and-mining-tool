import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Avatar } from "@material-ui/core";
import html2canvas from 'html2canvas';

const canvasRenderOption = {
    scale: 0.25,
    dpi: 900,
    useCORS: true,
    async: true,
    background: "#ffffff",
    width: 97,
    height: 493,
  };

const renderIndicator = (name, value) => {
    let classAnotation = "";
    if (name == "ERROR") classAnotation = "indicator-error";
    if (name == "WARN") classAnotation = "indicator-warn";
    if (name == "INFO") classAnotation = "indicator-info";
    if (name == "DEBUG") classAnotation = "indicator-debug";
  
    return <li className="indicator" key={`${name}`}>
      <span className={`indicator-avatar ${classAnotation}`}></span>
      <span className="indicator-value">{value}</span>
    </li>
  };

const renderTrack = (track, colInd, diagram) => {
    const { id, labelText, cellMap, } = track;
    console.log(`render track id: ${id}`);

    return cellMap.map((rowData, rowInd) => {
        // find rows height in all track
        const boundRowHeight = diagram.reduce((t, e) => {
            return Math.max(t, e.cellMap[rowInd].length)
        }, 0);

        return <div className="diagram-row" id={`diagram-row-${rowInd}`} key={`${rowInd}`} style={{ height: boundRowHeight * 133 }}>
            {
                rowData.map((layer, layerInd) => {
                    const {
                        blockName,
                        indicators,
                        previewContent,
                        scheduler,
                        segName,
                        timeSpan,
                        // depth, 
                    } = layer;

                    return <div className="diagram-layer" id={`layer-${colInd}-${rowInd}-${layerInd}`} key={`${colInd}-${rowInd}-${layerInd}`}>
                        <div className="layer-title">
                            <div className="title-item">{timeSpan.start}</div>
                            <div className="title-item">{timeSpan.end}</div>
                            {(!scheduler) ? <div className="title-item cycle-icon"><ScheduleIcon /></div> : null}
                        </div>
                        <div className="layer-content">
                            <ul className="layer-stat">
                                {
                                    Object.keys(indicators).sort().map((name) => {
                                        return renderIndicator(name, indicators[name])
                                    })
                                }
                            </ul>
                            <div className="detail-btn">
                                {previewContent.map((record, itemInd) => {
                                    return <p key={`item-${itemInd}`}>{record}</p>
                                })}
                            </div>
                        </div>
                    </div>

                })
            }
        </div>
    })
};

export default function DiagramView(props) {
    const diagram = props.view;
    useEffect(() => {
        html2canvas(document.querySelector(".diagram-table"), canvasRenderOption).then(function (canvas) {
          let parent = document.querySelector(".snapshot-canvas");
          while (parent.firstChild) {
            parent.firstChild.remove()
          }
          parent.appendChild(canvas);
        });
        // return ()=> {};
      });
    return <div className="diagram-table">
        {
            diagram.map((track, trackInd) => {
                return <div className="diagram-col" id={`diagram-col-${trackInd}`} key={`${trackInd}`}>
                    {renderTrack(track, trackInd, diagram)}
                </div>
            })
        }
    </div>
}