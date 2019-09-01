/*
 * @Author: haobrother 
 * @Date: 2019-09-01 16:09:03 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-01 16:17:59
 */

import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - HAPPY MMALL';
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