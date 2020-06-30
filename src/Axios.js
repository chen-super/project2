import Axios from 'axios'
Axios.defaults.baseURL="http://www.xidegui.top:9575/"
// 请求头
Axios.defaults.headers.post["Content-Type"]="application/json"
//拦截器
// Axios.interceptors.

export default Axios;