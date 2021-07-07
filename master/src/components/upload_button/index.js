import React, { useRef } from 'react';
import {PropTypes}  from 'prop-types';
import './index.less';
import {selectCurrentNode, uploadNodeResource} from '@/features/node_tree';
import {useSelector, useDispatch} from "react-redux";

export default function UploadButton(props) {
    const {text } = props;
    const dispatch = useDispatch();
    const currentNode = useSelector(selectCurrentNode);
    const uploadInputRef = useRef();

    const onUploadFile = (e) => {
        let file = e.target.files[0];
        let fileSize = (file.size) / 1024;
        let fileNameType = file.name.split('.').pop();
        console.log(`file size is : ${fileSize}`);
        let fileInfo = new FormData()
        if (file) {
          fileInfo.append('file', file)
          fileInfo.append('fileType', 'policy')

          dispatch(uploadNodeResource(fileInfo));
        }
        
        // postFormData('/attachment/uploadOne', fileInfo).then((res) => {
        //     if (res.data.code === '00') {
        //       let state = this.state;
        //       console.log(index)
        //       state.bankInfoList[index].attachmentList.push(res.data.data)
        //       if (state.bankInfoList[index].attIdArray == null) {
        //         state.bankInfoList[index].attIdArray = []
        //         state.bankInfoList[index].attIdArray.push(res.data.data.id)
        //       } else {
        //         state.bankInfoList[index].attIdArray.push(res.data.data.id)
        //       }
        //       this.setState({state}, () => {
        //         setStore('bankInfoList', this.state.bankInfoList)
        //       });
        //       Toast.info(res.data.codeMsg)
        //     } else {
        //       Toast.info(res.data.codeMsg)
        //     }
        //   }
        // )
      }
    
    
    const deleteFile = (id, index) => {
        // let state = this.state;
        // state.bankInfoList[index].attachmentList = state.bankInfoList[index].attachmentList.filter((item) => id !== item.id)
        // state.bankInfoList[index].attIdArray = state.bankInfoList[index].attIdArray.filter((item) => id !== item)
        // this.setState({state}, () => {
        //   setStore('bankInfoList', this.state.bankInfoList)
        // });
        // let fileEle = 'file_' + index
        // this.refs[fileEle].value = null
    }

    return <div className="upload-button">
        <div className="upload-file-area" onClick={() => {
            uploadInputRef.current.click()
        }}>
            <p>+</p>
            {(currentNode.resourceName) ? <p>{currentNode.resourceName}</p> : <p>{text}</p>} 
            <input type="file" ref={uploadInputRef} onChange={(e) => onUploadFile(e)}/>
        </div>
        
        {/* {item.attachmentList && item.attachmentList.map((v, index) => {
        return <div key={index} className={styles.fileInfo}>
            <div className={styles.fileItem}>{v.fileName.slice(0, 15) + '...'} 
            <span className={styles.deleteItem} onClick={() => deleteFile(v.id, refName)}>×</span>
            </div>
        </div>
        })} */}
    </div>;
}