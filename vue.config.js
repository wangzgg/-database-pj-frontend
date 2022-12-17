
module.exports = {

        publicPath: process.env.NODE_ENV === 'production' ? '/数据库pj/' : '/',


    devServer: {
        port:8080,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',//后端接口地址
                changeOrigin: true,//是否允许跨越
                pathRewrite: {
                    '^/api': '/'//重写,
                }
            }
        }
    }
}
