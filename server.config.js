var proxy = require('http-proxy-middleware');
//服务配置
module.exports = {
    host: "127.0.0.1",
    root:['build'],
    port:8080,
    path:'',
    livereload: true,
    middleware:function(connect, opt){
        return [
            proxy('/api',  {
                target: 'http://130.10.9.126:8080',
                changeOrigin:true
            })
        ];
    }
}

