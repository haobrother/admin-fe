/*
 * @Author: haobrother 
 * @Date: 2019-08-31 12:26:36 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-08-31 16:19:53
 */

import React from 'react';

import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';
import './theme.css';

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;