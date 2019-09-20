/*
 * @Author: haobrother 
 * @Date: 2019-09-07 18:34:41 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-09 18:47:47
 */

import React from 'react';
import FileUpload from './react-fileupload.jsx';

class FileUploader extends React.Component{
    render(){
        var options={
            baseUrl:'/manage/product/upload.do',
            fileFieldName: 'upload_file',
            dataType: 'json',
            chooseAndUpload: true,
            uploadSuccess: (res) => this.props.onSuccess(res.data),
            uploadError: (err) => this.props.onError(err.message || '上传图片出错啦')
        }
        /*调用FileUpload,传入options。然后在children中*/
        /*传入两个dom(不一定是button)并设置其ref值。*/
        return (
            <FileUpload options={options}>
                <button className="btn btn-xs btn-default" ref="chooseAndUpload">请选择图片</button>
            </FileUpload>
        );	        
    }
}

export default FileUploader;