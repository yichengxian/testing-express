# 测试app端接口说明



## 1.接口描述

注：所有接口符合 restful的设计思想; 接口采用json进行前后端交互

所有接口统一返回示例如下：

```json
{
   "code":10000,
   "msg":"消息内容",
   "data"："内容体",
   "time":1605239419828 //服务器时间戳
}
```

### 1.1异常举例

如若接口异常，则会返回对应code，code请参考**code码表**，异常json举例如下所示：

```json
{
	"code":500,
	"msg":"失败",
	"data":"xxxx",
    "time":1605239419828
}
```

 注意：接口采用nginx转发，如果在转发层发生异常则需要处理statusCode，所以需要先判定网络请求状态后再校验业务异常 code

### 1.2 校验说明

暂未做任何校验



## 2.接口



### 2.1 服务器校验

测试服务调通性

#####  URI

**/testing**

##### 支持格式

json

##### http请求方式

GET

##### 是否需要登录

否

##### 请求参数

无

##### 返回示例

```json
{
  "code": 200,
  "msg": "成功",
  "data": "hello word, this is restful api server",
  "time": 1605239419828
}
```

##### 返回字段说明

无

##### 注意事项



##### 问题说明



##### 其他





### 2.2 查询banner

查询banner的数据

#####  URI

**/testing/findBanner**

##### 支持格式

json

##### http请求方式

GET

##### 是否需要登录

否

##### 请求参数

无

##### 返回示例

```json
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "img": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/25d92aae644a24150ef6551485f5a286.png",
            "type": 0,
            "data": "52"
        },
        {
            "img": "https://h6.qiaomukeji.com/images/quce/product/2/02.png",
            "type": 0,
            "data": null
        }
    ],
    "time": 1605239902815
}
```

##### 返回字段说明

| 参数 | 类型   | 说明                                               |
| :--- | ------ | -------------------------------------------------- |
| img  | string | banner图                                           |
| type | int    | 类型(0只展示图，1网页跳转，2内部跳转)              |
| data | string | 其他参数，当为网页跳转和内部跳转时候需要用到此参数 |

##### 

##### 注意事项



##### 问题说明



##### 其他



### 2.3 查询评测专题

查询评测专题的数据

#####  URI

**/testing/findAllSubject**

##### 支持格式

json

##### http请求方式

GET

##### 是否需要登录

否

##### 请求参数

无

##### 返回示例

```json
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "id": 4,
            "title": "你是“左右脑”的哪种类型",
            "description": "学术脑？艺术脑？左右脑",
            "icon": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/6a94a78653f20156609aad48a11e8089.png",
            "img": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/4c288dbd891f9f98e35eefaf7856f6a0.png",
            "descImg": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/9bd20894d3afd8290cd581f6124cb57a.png",
            "num": 5,
            "shareIcon": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/6a94a78653f20156609aad48a11e8089.png",
            "lastIcon": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/25d92aae644a24150ef6551485f5a286.png",
            "favorableRate": 666,
            "type": 2,
            "data": "782asd"
        }
    ],
    "time": 1605248295564
}
```

##### 返回字段说明

| 参数          | 类型   | 说明                                                  |
| :------------ | ------ | ----------------------------------------------------- |
| id            | int    | 评测专题id                                            |
| title         | string | 标题                                                  |
| description   | string | 描述                                                  |
| icon          | string | logo图url                                             |
| img           | string | 大展示图                                              |
| descImg       | string | 描述图                                                |
| num           | int    | 评测次数                                              |
| shareIcon     | string | 分享图                                                |
| lastIcon      | string | 最后展示图( 意思是展示结束的图)                       |
| favorableRate | string | 好评率(10% = 1000)                                    |
| type          | string | 类型(1站内评测，2网页评测)                            |
| data          | string | 附加属性字段(配合type使用，当为网页评测类型该值为url) |

##### 

##### 注意事项



##### 问题说明



##### 其他





### 2.4 获得做题唯一序列

获得一个唯一做题序列

#####  URI

**/testing/getMakeId**

##### 支持格式

json

##### http请求方式

GET

##### 是否需要登录

否

##### 请求参数

query

| 参数      | 必选 | 类型 | 说明       |
| --------- | ---- | ---- | ---------- |
| subjectId | true | int  | 评测专题id |



##### 返回示例

```json
{
    "code": 200,
    "msg": "成功",
    "data": "1327137256045154304",
    "time": 1605249153517
}
```

##### 返回字段说明

| 参数 | 类型   | 说明               |
| :--- | ------ | ------------------ |
| /    | string | 一个唯一的评测序列 |

##### 

##### 注意事项

1. 该评测序列需要在做题前获得否则无法继续做题
2. 需用通过评测专题获得

##### 问题说明



##### 其他



### 2.5 获得所有题目和选项

获得所有选项包括答案项

#####  URI

**/testing/getAllExercise**

##### 支持格式

json

##### http请求方式

GET

##### 是否需要登录

否

##### 请求参数

query

| 参数   | 必选 | 类型   | 说明     |
| ------ | ---- | ------ | -------- |
| makeId | true | string | 评测序列 |



##### 返回示例

```json
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "id": 1,
            "evaluateId": 4,
            "content": "遇到苦难的时候，你通常会？",
            "answer": [
                {
                    "id": 1,
                    "content": "认真分析形式及解决方案，三四而后行"
                }
            ]
        }
    ],
    "time": 1605249452433
}
```

##### 返回字段说明

| 参数       | 类型          | 说明             |
| :--------- | ------------- | ---------------- |
| id         | int           | 题目id           |
| evaluateId | int           | 评测id           |
| content    | string        | 题目内容         |
| answer     | array<object> | 选项对象数组列表 |

answer 答案选项对象说明：

| 参数    | 类型   | 说明     |
| :------ | ------ | -------- |
| id      | int    | 答案id   |
| content | string | 答案内容 |



##### 注意事项



##### 问题说明



##### 其他



### 2.6 答题

选择答案

#####  URI

**/testing/makeExercise**

##### 支持格式

json

##### http请求方式

POST

##### 是否需要登录

否

##### 请求参数

body

| 参数     | 必选 | 类型   | 说明     |
| -------- | ---- | ------ | -------- |
| makeId   | true | string | 评测序列 |
| answerId | true | string | 答案id   |



##### 返回示例

```json
{
    "code": 200,
    "msg": "成功",
    "time": 1605251055643
}
```

##### 返回字段说明

无



##### 注意事项



##### 问题说明



##### 其他





### 2.7 结束答题

结束本次答题

#####  URI

**/testing/endExercise**

##### 支持格式

json

##### http请求方式

POST

##### 是否需要登录

否

##### 请求参数

body

| 参数   | 必选 | 类型   | 说明     |
| ------ | ---- | ------ | -------- |
| makeId | true | string | 评测序列 |



##### 返回示例

```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "img": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/25d92aae644a24150ef6551485f5a286.png"
    },
    "time": 1605253525662
}
```

##### 返回字段说明



| 参数 | 类型   | 说明       |
| :--- | ------ | ---------- |
| img  | string | 答题结果图 |



##### 注意事项



##### 问题说明



##### 其他



### 2.7 查询单个答题专题详细

结束本次答题

#####  URI

**/testing/findSubject**

##### 支持格式

json

##### http请求方式

GET

##### 是否需要登录

否

##### 请求参数

body

| 参数      | 必选 | 类型   | 说明       |
| --------- | ---- | ------ | ---------- |
| subjectId | true | string | 评测专题id |



##### 返回示例

```json
{
    "code": 200,
    "msg": "成功",
    "data":  {
            "id": 4,
            "title": "你是“左右脑”的哪种类型",
            "description": "学术脑？艺术脑？左右脑",
            "icon": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/6a94a78653f20156609aad48a11e8089.png",
            "img": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/4c288dbd891f9f98e35eefaf7856f6a0.png",
            "descImg": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/9bd20894d3afd8290cd581f6124cb57a.png",
            "num": 5,
            "shareIcon": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/6a94a78653f20156609aad48a11e8089.png",
            "lastIcon": "https://testing-1302877570.cos.ap-nanjing.myqcloud.com/image/25d92aae644a24150ef6551485f5a286.png",
            "favorableRate": 666,
            "type": 2,
            "data": "782asd"
        }
    "time": 1605248295564
}
```

##### 返回字段说明

##### 

| 参数          | 类型   | 说明                            |
| :------------ | ------ | ------------------------------- |
| id            | int    | 评测专题id                      |
| title         | string | 标题                            |
| description   | string | 描述                            |
| icon          | string | logo图url                       |
| img           | string | 大展示图                        |
| descImg       | string | 描述图                          |
| num           | int    | 评测次数                        |
| shareIcon     | string | 分享图                          |
| lastIcon      | string | 最后展示图( 意思是展示结束的图) |
| favorableRate | string | 好评率(10% = 1000)              |
| type          | string | 类型(1站内评测，2网页评测)      |
| data          |        |                                 |

##### 注意事项



##### 问题说明



##### 其他

















































































