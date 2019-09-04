/*
 * @Author: haobrother 
 * @Date: 2019-09-03 15:39:35 
 * @Last Modified by: haobrother
 * @Last Modified time: 2019-09-03 15:40:55
 */

import MUtil from 'util/mm.jsx'

const _mm = new MUtil();

class Statistic{
    // 首页数据统计
    getHomeCount(){
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        });
    }
}

export default Statistic;