import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.less";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { addBlankDocument, addDocument, removeDocument, changeActivedInd } from '@/features/document_set';
import CloseIcon from '@material-ui/icons/Close';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { selectActivedDocInd, selectDocumentList } from "@/features/document_set";
import DiagramView from '@/components/document_viewer/document_diagram_view';
import SearchResultView from '@/components/document_viewer/search_result_view';
import PluginDetailView from '@/components/document_viewer/plugin_detail_view';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      style={{ height: '100%' }}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{ height: '100%', padding: '2px' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
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



const renderDocument = (view) => {
  if (view.type == "documentDiagram") {
    return <DiagramView view={view.content} />
  } else if (view.type == "searchResult") { 
    return <SearchResultView view={view.content} />
  } else if (view.type == "pluginDetail") {
    return <PluginDetailView view={view.content} />
  }
};

function DocumentViewer(props) {
  let documentList = useSelector(selectDocumentList);
  let activedDocInd = useSelector(selectActivedDocInd);
  const dispatch = useDispatch();

  function createPinTab(tabIndex, title) {
    return <div className={`pin-tab`}>
      <span className={`pin-tab-icon`}><FavoriteIcon fontSize='inherit' /></span>
      <span className={`pin-tab-text`}>{title}</span>
      <span className={`pin-tab-closebtn`} onClick={(e) => dispatch(removeDocument(tabIndex))}><CloseIcon fontSize='inherit' /></span>
    </div>
  }

  if (!documentList.length) { return <p className="black-placeholder"></p>; }
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
              {tabInfo ? renderDocument(tabInfo) : null}
            </TabPanel>)
          })
        }
      </div>
      <div className="snapshot-canvas">
      </div>
    </div>
    )
  );
}

export default DocumentViewer;