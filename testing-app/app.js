const express = require('express')
const glob = require('glob');
//异步异常重写捕获器 必须在express 之后
require('express-async-errors');

//biz
const config = require('../testing-config/app-config');
const exceptionHandler = require('../testing-common/exception/GlobalExceptionHandler');
const NetUtil = require('../testing-common/util/NetUtil');
const BizException = require("../testing-common/exception/BizException");
const BizResultCode = require("../testing-common/api/BaseResultCode");
const HttpConfig = require("../testing-common/request/HttpConfig");
const ObjectUtil = require('../testing-common/util/ObjectUtil');
const loggerFactory = require('../testing-common/logger/LoggerFactory');

const app = express()
// json
app.use(express.json({limit:config.server.bodyLimit}));
app.use(express.urlencoded({parameterLimit:config.server.bodyLimit,extended:false}));


//* 匹配所有 just is router
app.use('*' ,async (req,res,next) =>HttpConfig.handler(req,res,next));

//自动注册路由
glob.sync(config.routerPath).forEach(file => {
    //注入路由文件
    const router = require('./' + file);
    if (ObjectUtil.isNotEmpty(router)){
        app.use(config.server.contextPath, router);
    }

});
//一些初始化项
const Init = require('./initialize/Init');
Init.initAll(app)

// 404
app.use((req, res, next) => next(new BizException(BizResultCode.API_NOT_FOUNT)))
//异常适配器
exceptionHandler.handler(app);

//port
let port = config.server.port;
//监听
app.listen(port, () => {
    loggerFactory.getLogger().info(
        '\n----------------------------------------------------------\n\t'+
        'Application %s is running! Access URLs:\n\t'+
        'Local: \t\t http://localhost:%s%s\n\t'+
        'External: \t http://%s:%s%s\n'+
        '----------------------------------------------------------',
        config.appName,
        port,
        config.server.contextPath,
        NetUtil.getIPAddress(),
        port,
        config.server.contextPath,
    )
})






