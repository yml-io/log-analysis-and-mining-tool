import React from 'react';
import './index.less';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { useSelector } from 'react-redux';
import { addCategory, removeCategory, addKeyword, removeKeyword, selectTermCorpus } from '@/features/search_structure';


const useStylesForTreeView = makeStyles({
    root: {
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
        color: 'white',
        fontSize: 12
    },
});


export default function SearchTreeView() {
    const termCorpus = useSelector(selectTermCorpus);
    const renderKeywordItem = (wordings, categoryId) =>
        wordings.map((w, i) => <TreeItem nodeId={categoryId + "kw" + i} label={w} key={"kw" + i} />);
    return (
        <TreeView
            // expanded={[]}
            className={useStylesForTreeView().root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}>
            {
                termCorpus.map((tc, _index) => {
                    const { type, category, keywords } = tc;
                    const categoryId = "cg" + _index;
                    return <TreeItem
                        nodeId={categoryId}
                        label={category}
                        key={categoryId}>
                        {keywords ? renderKeywordItem(keywords, categoryId) : null}
                    </TreeItem>
                })
            }
        </TreeView>
    );
}