// 【定义全局axios拦截器】
// 如果登录失败，需要弹窗显示错误的，比如验证码错误，用户名或密码不正确等
// 不仅仅是这个登录接口，所有的接口调用都会有这个情况
// 所以我们想做个拦截器，对返回的结果进行分析
// 如果是异常就直接弹窗显示错误，这样我们就省得每个接口都写一遍了。
// 在src目录下创建一个文件axios.js（与main.js同级），定义axios的拦截：import axios from "axios";

import axios from "axios"//不要忘了这个！！！
import Element from 'element-ui'
//没有权限的话可以调到登陆页面
import router from "./router"
//全局定义，先随便定义一下，不和8080重复
axios.defaults.baseURL = "http://127.0.0.1:4523/m1/2068548-0-default"


const request = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

// request.interceptors.request.use(config => {
//     config.headers['Authorization'] = localStorage.getItem("token") // 请求头带上token
//     return config
// })

request.interceptors.response.use(response => {
        let res = response.data;
        console.log("response")
        console.log(res)
        if (res.code === 200) {
            return response
        } else {
            Element.Message.error(res.msg? res.msg : '系统异常！', {duration: 3 * 1000})
            return Promise.reject(response.data.msg)
        }
    },
    // 前置拦截，其实可以统一为所有需要权限的请求装配上header的token信息
    // 后置拦截中，判断status.code和error.response.status
    // 如果是401未登录没权限的就调到登录页面
    // 其他的就直接弹窗显示错误。
    error => {
        // 异常状态和状态码
        console.log(error)
        if(error.response.data) {
            error.message = error.response.data.msg
        }
        //没有权限，状态码401，返回登录界面

        //错误，弹窗时间3000ms
        Element.Message.error(error.message, {duration: 3 * 1000})
        return Promise.reject(error)
    }
)
export default request