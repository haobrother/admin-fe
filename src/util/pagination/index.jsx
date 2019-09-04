/*
 * @Author: haobrother 
 * @Date: 2019-09-03 22:34:16 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-03 22:38:54
 */

import React from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} 
                        hideOnSinglePage
                        showQuickJumper />
                </div>
            </div>
        );
    }
}

export default Pagination;

