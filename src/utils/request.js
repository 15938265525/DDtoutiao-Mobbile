
// 请求模块： 基于axios
import Axios from 'axios'

const request = Axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/' // 接口基路径 l
})

export default {
    request
}
