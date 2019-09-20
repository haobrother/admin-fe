/*
 * @Author: haobrother 
 * @Date: 2019-09-01 21:40:41 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-11 18:45:26
 */

import MUtil from 'util/mm.jsx'

const _mm = new MUtil();

class User{
    // 用户登录
    login(loginInfo){
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        });
    }
    // 检查登录接口的数据是不是合法
    checkLoginInfo(loginInfo){
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);
        // 判断用户名不为空
        if(typeof username !== 'string' || username.length === 0){
            return {
                status: false,
                msg: '用户名不能为空'
            }
        }
        // 判断密码不为空
        if(typeof password !== 'string' || password.length === 0){
            return {
                status: false,
                msg: '密码不能为空'
            }
        }
        return {
            status: true,
            msg: '验证通过'
        }
    }
    logout(){
        return _mm.request({
            type: 'post',
            url: '/user/logout.do'
        });
    }
    getUserList(pageNum){
        return _mm.request({
            type: 'post',
            url: '/manage/user/list.do',
            data: {
                pageNum: pageNum
            }
        });
    }
}

export default User;