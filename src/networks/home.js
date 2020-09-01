import { request } from './request.js'

//获取主页轮播图、推荐数据
export function getHomeMulitData() {
    return request({
        url: '/home/multidata'
    })
}

//获取
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}