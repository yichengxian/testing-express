/**
 * config
 * @type {{}}
 */
module.exports = {

    //路由正则 相对app.js的路径
    routerPath: 'biz/router/**/*.js',
    //服务器名称
    appName: 'testing',
    /**
     * 服务器
     */
    server: {
        port: 8080,
        contextPath: '/testing',
        //上传body 最大大小 2m
        bodyLimit: 2100000
    },

    /**
     * mysql
     */
    mysql: {
        host: '127.0.0.1',
        port: 3306,
        database: 'testing',
        username: 'testing_admin',
        password: '1Bj5ncon8',
        //连接池
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        //sql日志打印
        logging: {
            enable: false
        },
        //字段定义 todo 未作整理
        define: {
            //关闭自动更新时间
            timestamps: false
        }
    },

    /**
     * redis
     */
    redis: {
        host: '127.0.0.1',
        port: 6379,
        database: 1,
        password: 'admin',
        /**
         * 连接池
         */
        pool: {
            maxClient: 30,
            keepAlive: 3000
        }
    },


    /**
     * log4j
     */
    log4j: {

        //log4j配置项
        configuration: {
            //
            replaceConsole: true,
            //开启pm2
            pm2: true,

            appenders: {
                //控制台输出
                stdout: {
                    type: 'console'
                },

                trace: {
                    type: 'dateFile',
                    filename: '../logs/app/trace/',
                    pattern: 'yyyy-MM-dd.log',
                    //每个日志的最大存储空间
                    // maxLogSize: 10,
                    //包含模型
                    alwaysIncludePattern: true
                },

                debug: {
                    type: 'dateFile',
                    filename: '../logs/app/debug/',
                    pattern: 'yyyy-MM-dd.log',
                    //  maxLogSize: 10,
                    alwaysIncludePattern: true
                },
                info: {
                    type: 'dateFile',
                    filename: '../logs/app/info/',
                    pattern: 'yyyy-MM-dd.log',
                    // maxLogSize: 10,
                    alwaysIncludePattern: true
                },
                warn: {
                    type: 'dateFile',
                    filename: '../logs/app/warn/',
                    pattern: 'yyyy-MM-dd.log',
                   // maxLogSize: 10,
                    alwaysIncludePattern: true
                },
                error: {
                    type: 'dateFile',
                    filename: '../logs/app/error/',
                    pattern: 'yyyy-MM-dd.log',
                    //  maxLogSize: 10,
                    alwaysIncludePattern: true
                },
                fatal: {
                    type: 'dateFile',
                    filename: '../logs/app/fatal/',
                    pattern: 'yyyy-MM-dd.log',
                    //  maxLogSize: 10,
                    alwaysIncludePattern: true
                },

            },
            categories: {
                //appenders:采用的appender,取appenders项,level:设置级别
                trace: {appenders: ['stdout', 'trace'], level: 'trace'},
                debug: { appenders: ['stdout', 'debug'], level: 'debug' },
                default: {appenders: ['stdout', 'info'], level: 'info'},
                warn: {appenders: ['stdout', 'warn'], level: 'warn'},
                error: {appenders: ['stdout', 'error'], level: 'error'},
                fatal: {appenders: ['stdout', 'fatal'], level: 'fatal'},
            }
        },
        //日志输出级别
        levels: ['INFO','WARN','DEBUG'],
        //自定义格式化输出项
        format: '[:remote-addr :method :url :status :response-time ms][:referrer HTTP/:http-version :user-agent]'
    }
}
