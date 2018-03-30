import { sweetStore, SWXHR, SWTOOL } from '@sweetui/sweet-mobile';

const xhr = function(Vue) {
    const SWXHR_OPTIONS = {
        config: {
            // 配置全局接口前缀
            baseURL: '', // 配置全局接口延迟
            timeout: 0, // 配置全局接口请求头 ...其他更多配置项可以参考axios文档
            headers: {}
        },
        intercept: {
            // 配置全局SWXHR拦截器 -- > 请求前
            request(p) {
                // console.log('请求前');
                return p;
            }, // 配置全局SWXHR拦截器 -- > 请求后
            response(res) {
                var result = res.data;

                if (res.status === 200 && result.code !== 'success') {
                    Vue.prototype.$message(result.message);
                }

                return result;
            }
        }
    };
    const sweetXhr = new SWXHR(Vue, SWXHR_OPTIONS, sweetStore, SWTOOL);
    Vue.use(sweetXhr);
    return sweetXhr;
};

export default xhr;
