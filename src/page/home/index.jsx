/*
 * @Author: haobrother 
 * @Date: 2019-08-31 11:03:31 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-01 16:17:02
 */

import React from 'react';

import PageTitle from 'component/page-title/index.jsx';
import './index.css';

class Home extends React.Component{
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="首页" />
                <div className="row">
                    <div className="col-md-12">body</div>
                </div>
            </div>
        );
    }
}

export default Home;