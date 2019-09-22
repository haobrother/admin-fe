/*
 * @Author: haobrother 
 * @Date: 2019-08-27 22:31:12 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-21 17:45:30
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

// 布局
import Layout from 'component/layout/index.jsx';

// 页面
import Home from 'page/home/index.jsx';
import ProductRouter from 'page/product/router.jsx';  // 子路由
import Login from 'page/login/index.jsx';
import UserList from 'page/user/index.jsx';
import ErrorPage from 'page/error/index.jsx';

class App extends React.Component{
    render(){
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={ProductRouter} />
                    <Route path="/product-category" component={ProductRouter} />
                    <Route path="/user/index" component={UserList} />
                    <Redirect exact from="/user" to="/user/index" />
                    <Route component={ErrorPage} />
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" render={(props) => ( LayoutRouter )}/>
                </Switch>
            </Router> 
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);