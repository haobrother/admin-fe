/*
 * @Author: haobrother 
 * @Date: 2019-09-04 17:28:59 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-20 18:16:13
 */

import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

// 页面
import ProductList from 'page/product/index/index.jsx';
import ProductSave from 'page/product/index/save.jsx';
import ProductDetail from 'page/product/index/detail.jsx';

class ProductRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/product/index" component={ProductList} />
                <Route path="/product/save/:pid?" component={ProductSave} />
                <Route path="/product/detail/:pid" component={ProductDetail} />
                <Redirect exact from="/product" to="/product/index" />
            </Switch>
        );
    }
}

export default ProductRouter;