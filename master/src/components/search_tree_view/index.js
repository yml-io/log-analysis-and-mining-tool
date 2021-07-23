import React from 'react';
import './index.less';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { useSelector } from 'react-redux';
import { addKeywords, removeKeywords, selectTermCorpus, selectShowAddKeywordDialog, getKeywordSearchResult } from '@/features/search_structure';
import AddKeywordDialog from '@/components/dialog/add_keyword_dialog';
import Badge from '@material-ui/core/Badge';
import { useDispatch } from 'react-redux';

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
    const showAddKeywordDialog = useSelector(selectShowAddKeywordDialog);
    const termCorpus = useSelector(selectTermCorpus);
    const renderKeywordItem = (wordings, categoryId, foundCount) =>
        wordings.map((w, i) =>
            <Badge color="error" badgeContent={foundCount && foundCount[w] ? foundCount[w] : 0} max={100}>
                <TreeItem nodeId={categoryId + "kw" + i} label={w} key={"kw" + i} onClick={() => { dispatch(getKeywordSearchResult(w)) }} />
            </Badge>);
    const handleAddKeywordDialogClose = () => { };

    return (
        <div className="search-tree-view">
            <TreeView
                // expanded={[]}
                className={useStylesForTreeView().root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}>
                {
                    termCorpus.map((tc, _index) => {
                        const { type, category, keywords, foundCount } = tc;
                        const categoryId = "cg" + _index;
                        return <TreeItem
                            nodeId={categoryId}
                            label={category}
                            key={categoryId}>
                            {keywords ? renderKeywordItem(keywords, categoryId, foundCount) : null}
                        </TreeItem>
                    })
                }
            </TreeView>
            {(showAddKeywordDialog) ? <AddKeywordDialog isOpenDialig={showAddKeywordDialog} handleCloseCallback={handleAddKeywordDialogClose} /> : null}
        </div>
    );
}