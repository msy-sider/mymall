import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import { request } from './network/request'


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')



//1.axios的基本使用
axios({
    url: 'http://123.207.32.32:8000/home/multidata',
    method: 'get'
}).then(res => { //axios返回一个Promise，所以可以直接使用then
    console.log(res);
})

axios({
    url: 'http://123.207.32.32:8000/home/data',
    //专门针对get请求的参数拼接
    params: {
        type: 'pop',
        page: 1
    }
}).then(res => {
    console.log(res);

})

//2.axios发送并发请求
axios.all([axios({
    url: 'http://123.207.32.32:8000/home/multidata',
}), axios({
    url: 'http://123.207.32.32:8000/home/data',
    params: {
        type: 'sell',
        page: 4
    }
})]).then(results => {
    console.log(results);

})



//3.使用全局的axios和对应的配置在进行网络请求
/*axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000
axios.all([axios({
    url: '/home/multidata7'
}), axios({
    url: '/home/data',
    params: {
        type: 'sell',
        page: 4
    }
})]).then(results => {
    console.log(results);

})

axios({
    url: '/category'
})*/




//4.创建对应的axios的实例
/*const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
})

instance1({
    url: '/home/multidata'
}).then(res => {
    console.log(res);
})

instance1({
    url: '/home/data',
    params: {
        type: 'pop',
        page: 1
    }
}).then(res => {
    console.log(res);

})

const instance2 = axios.create({
    baseURL: 'http://222.111.33.33:8000',
    timeout: 10000
})*/



//5.封装request模块
/*import { request } from './network/request'

request({
    url: '/home/multidata'
}, res => {
    console.log(res);

}, err => {
    console.log(err);

})*/

//终极方案
request({
    url: '/home/multidata'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);

})