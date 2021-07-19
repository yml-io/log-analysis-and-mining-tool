import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.less";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {addBlankDocument, addDocument, removeDocument, changeActivedInd} from '@/features/document_set';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CloseIcon from '@material-ui/icons/Close';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Avatar } from "@material-ui/core";
import { selectActivedDocInd, selectDocumentList } from "../../features/document_set";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      style={{height: '100%'}}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{height: '100%', padding: '2px'}}>
          {/* <Typography> */}
            {children}
            {/* </Typography> */}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
  root: {
      backgroundColor: 'rgb(0,23，51)',
      minHeight: 0,
  },
  indicator: {
    display: 'none',
    // justifyContent: 'center',
    // backgroundColor: 'rgb(250,250,250)',
    // '& > span': {
    //   // maxWidth: 40,
    //   // width: '100%',
    //   // backgroundColor: '#635ee7',
    //   backgroundColor: 'rgb(250,250,250)',
    // },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
      textTransform: 'none',
      color: 'rgb(128,142,160)',
      backgroundColor: 'rgb(0,28,64)',
      borderRight: 'solid 1px rgb(37,37,38)',
      // fontWeight: theme.typography.fontWeightRegular,
      // fontSize: theme.typography.pxToRem(10),
      // marginRight: theme.spacing(1),
      minWidth: 0,
      minHeight: 0,
      padding: '5px 10px',
      '&:focus': {
          color: 'rgb(200,200,200)',
          backgroundColor: 'rgb(0,36,81)',
      },
      // '&:hover': {
      //     color: 'rgb(0,28,64)',
      // },
  },
  selected: {
    color: 'rgb(200,200,200)',
    backgroundColor: 'rgb(0,36,81)',
  },
  wrapper: {
    // paddingLeft: 25,
    // "&> *:first-child": {
    //   position: 'absolute',
    //   top: 5,
    //   left: 5,
    // }
  }
}))((props) => <Tab disableRipple {...props} />);


const renderDiagram = (nodeDiagram) => {
  const {id, labelText, compareGroup, fragments} = nodeDiagram;

  const renderIndicator = (name, value) => {
    let classAnotation = "";
    if (name=="ERROR") classAnotation = "indicator-error";
    if (name=="WARN") classAnotation = "indicator-warn";
    if (name=="INFO") classAnotation = "indicator-info";
    if (name=="DEBUG") classAnotation = "indicator-debug";
    

    return <li className={`stat-item`}>
      <span className={`indicator-avatar ${classAnotation}`}></span>
      <span className="indicator-value">{value}</span>
    </li>
  };

  if (fragments) {
    if (!Array.isArray(fragments)) {
      throw Error("can not render a non-array fragment.");
    }
    return <div className="diagram-track">
      {
        fragments.map((segmentInfo, segmentInd) => {
          const segmentName = segmentInfo.name;
          const blockList = segmentInfo.blockList.slice().sort(function (a,b){
            if (a.timeSpan.start == b.timeSpan.start) {
              if (a.timeSpan.end == b.timeSpan.end) return 0;
              if (a.timeSpan.end > b.timeSpan.end) return 1;
              return -1;
            };
            if (a.timeSpan.start > b.timeSpan.start) return 1;
            return -1;
          });
          
          // we must sort block list first and align to time
          
          const blockDOM = blockList.map((blockInfo, blockInd) => {
            const blockName = blockInfo.name;
            const indicators = blockInfo.indicator;
            const scheduler = blockInfo.scheduler;
            const timeSpan = blockInfo.timeSpan;
            const previewContent = blockInfo.previewContent;
            return <div className="block" key={segmentInd+''+blockInd} id={`block-${segmentInd}-${blockInd}`}>
                <div className="block-title">
                  <div className="title-item">{timeSpan.start}</div>
                  <div className="title-item">{timeSpan.end}</div>
                  {(!scheduler) ? <div className="title-item cycle-icon"><ScheduleIcon/></div>: null }
                </div>
                <div className="block-content">
                  <ul className="block-stat">
                    {
                      Object.keys(indicators).sort().map((name) => {
                        return renderIndicator(name, indicators[name])
                      })
                    }
                  </ul>
                    <div className="detail-btn">
                      {previewContent.map(record => {
                        return <p>{record}</p>
                      })}
                    </div>
                </div>
            </div>
          });
          return <div className="segment" key={segmentInd} id={`segment-${segmentInd}`}>
                    <div className="segment-title"></div>
                    <div className="segment-content">{blockDOM}</div>
          </div>
        })
      }
    </div>
  } else if (compareGroup) {
    return <div className="diagram-track-group">
      {
        compareGroup.map((subDiagram) => {
            return renderDiagram(subDiagram)
        })
      }
    </div>
  } else {
    return <div className="diagram-track track-empty">
      <p>Resource Not Found</p>
    </div>
  }
};


function DocumentViewer(props) {
  let documentList = useSelector(selectDocumentList);
  let activedDocInd = useSelector(selectActivedDocInd);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   Avatar();
  //   return ()=> {

  //   };
  // }, [conter]);

  // // const {title, tag} = props;
  // const [state, setState] = React.useState({
  //   tabs:SAMPLE_TABS,
  //   active: 0,
  // });
  
  // public interface for control component

  
  function switchTab(event, newActive) {
    // check this value here?
    
    // setState({
    //   tabs:state.tabs,   muse be add all field in useState hook !
    //   active: newActive
    // });
  }
  // function closeTab(_ind) {
  //   const tabs_cp = state.tabs;
  //   if(_ind<previous_tabs.length && _ind>=0){
  //     tabs_cp.splice(_ind, 1);
  //     setTabs({
  //       tabs: tabs_cp
  //     });
  //   }
  // }
  function createPinTab(tabIndex, title) {
    return <div className={`pin-tab`}>
        <span className={`pin-tab-icon`}><FavoriteIcon fontSize='inherit' /></span>
        <span className={`pin-tab-text`}>{title}</span>
        <span className={`pin-tab-closebtn`} onClick={(e) => dispatch(removeDocument(tabIndex))}><CloseIcon fontSize='inherit' /></span>
      </div>
  }

  // onclick 里面一定要是箭头函数！！！！！！！！！！！！！！！
  if (!documentList.length) {return <p className="black-placeholder"></p>;}
  return (
        (<div className="document-viewer">
            <StyledTabs
              value={activedDocInd}
              onChange={(e, newInd) => dispatch(changeActivedInd(newInd))}
              variant="scrollable"
              scrollButtons="off"
              aria-label="scrollable tabs"
            >
              {
                documentList.map((tabInfo, tabInd) => {
                  return <StyledTab label={createPinTab(tabInd, tabInfo.title)} key={tabInd} {...a11yProps(tabInd)}>
                    </StyledTab>
                })
              }
            </StyledTabs>
            <div className="editor-panel">
            {
                documentList.map((tabInfo, tabInd) => {
                  return (<TabPanel value={activedDocInd} index={tabInd} key={tabInd}>
                  {renderDiagram(tabInfo.content)}
                </TabPanel>)
                })
            }
            </div>
          </div>
        )
      );
}

export default DocumentViewer;