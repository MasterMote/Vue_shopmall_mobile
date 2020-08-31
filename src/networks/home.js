import { request } from './request.js'

//获取主页数据封装
export function getHomeMulitData() {
    return request({
        url: '/home/multidata'
    })
}