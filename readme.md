# 趣味测试(node express框架 api再次改造)
nodejs 的再次学习

## 主要使用到的框架

- web框架 express
- 日志框架 log4j
- 数据库框架 sequelize
- redis框架 ioredis
- 数据库model生成框架 sequelize-automate

## 主要用到的工具
- mysql 数据库
- redis 缓存项(我做了临时存储项)
- webstrom 开发工具/markdown编写工具
- dbeaver mysql 数据库链接工具
- Another-Redis-Desktop-Manager nosql redis连接工具

## 主要处理
- 统一api json 结构
- config 配置文件
- 使用推特雪花算法
- 全局异常处理
- 日志处理
- redis 操作的封装
- mysql 操作的封装
- 自动生成适宜sequelize操作的model

## 启动
~~首先要有数据库软件，表~~
testing-app目录下找到app.js，run ta 或者debug ta.

## 目录结构说明

```
-doc 部分文档
-admin 后台服务接口
-app 前端接口
	--biz 业务层
	--initlalize 初始化项
	--result 业务result项
	--util 业务util项
-common 公共提取项
	--api 公共api项比如resultCode | result
	--constant 公告常量
	--exception 异常处理等
	--logger 日志
	--mysql mysql
	--redis redis 
	--request 请求处理(nan)
	-- util 封装的工具
-config 配置文件

-models 数据库model 
```



## todo项
redis 缓存数据(解决mysql数据库压力)
admin 后台管理api设计;



## 不重要的话
- 好像实现的不够优雅，比如参数错误哦 (但是，打出异常，那么会对性能有一定损耗，毕竟要去获得vm的错误堆栈信息)。
- log4j 日志框架使用真有这么复杂么？非要去指定那个文件里面去，否则，info的fileData居然打印warn lever，怎么区分。
- 什么时候js提案通过注解这玩意，装饰器模式强强强！！！ 理解[设计模式](https://www.cnblogs.com/alesic/p/10312514.html) 知道那么点总没坏处

## 其他
<b>不知道下次什么时候更新了，兄弟们加油！！！</b> 奥力给。。。~~好吧，我承认我的懒惰~~
