/*
 * @Author: haobrother 
 * @Date: 2019-08-27 22:31:12 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-01 15:54:21
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

// 布局
import Layout from 'component/layout/index.jsx';

// 页面
import Home from 'page/home/index.jsx';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/product" component={Home} />
                        <Route path="/product-category" component={Home} />
                    </Switch>
                </Layout>
            </Router> 
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);