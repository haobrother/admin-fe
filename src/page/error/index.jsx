/*
 * @Author: haobrother 
 * @Date: 2019-09-03 16:03:14 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-03 16:17:35
 */

import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'component/page-title/index.jsx';

class ErrorPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="出错啦!" />
                <div className="row">
                    <div className="col-md-12">
                        <sapn>找不到该路径，</sapn>
                        <Link to="/">点我返回首页</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorPage;