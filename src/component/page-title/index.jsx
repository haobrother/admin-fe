/*
 * @Author: haobrother 
 * @Date: 2019-09-01 16:09:03 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-10-30 15:16:06
 */

import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - HaoMALL管理后台';
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageTitle;