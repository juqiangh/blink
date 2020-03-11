import { config } from '../config.js';

class HTTP{

    request(params) {
        let url = config.api_blink_url + params.url;
        if(!params.method) {
            params.method = 'GET';
        }
        wx.request({
            url: url,
            data: params.data,
            method: params.method,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success: (res) => {
                // 判断以2（2xx)开头的状态码为正确
                // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
                let code = res.statusCode.toString();
                if(code.startsWith("2")) {
                    params.success && params.success(res.data);
                } else {
                    wx.showToast({
                        title: '错误',
                        icon: 'none',
                        duration: 2000
                    })
                }
            },
            fail: (err) => {

            }
        })
    }
}

export { HTTP };