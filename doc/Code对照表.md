# code对照表



## 1.通用

| code | 说明         |                                                              |
| ---- | ------------ | ------------------------------------------------------------ |
| 200  | 成功         | 返回成功                                                     |
| 500  | 失败         | 返回失败                                                     |
| 400  | 参数校验失败 | 请求参数未传                                                 |
| 404  | 接口不存在   | 请求方式有误或者请求路径不存在                               |
| 700  | 操作过于频繁 | 不要尝试同时发起两次请求(根据访问路径和ip进行访问限制(1s/次)) |



## 2.业务code说明

业务代码code为是一共7位

以答题业务code为例：

| code    | 说明               |
| ------- | ------------------ |
| 1011001 | 没有相应的做题序列 |

- 10 代表系统 (主要代表在该项目中的哪个系统)
- 11 代表业务 标识所属业务
- 001 为该业务的中的唯一标识

组合后为1011001



## 3.业务code

### 3.1答题

系统 10 业务11

| code    | 说明                   |                                                 |
| ------- | ---------------------- | ----------------------------------------------- |
| 1011001 | 没有相应的做题序列     | 没有相应的做题序列                              |
| 1011002 | 没有找到对应的评测问题 | 没有找到对应的评测问题                          |
| 1011003 | 没有找到对应的专题评测 | 请检查是否存在此专题评测或者是否专题评测有问题  |
| 1011005 | 答案与专题不成立       | 这个答案不再这个专题之下 需要检查答案id是否传错 |
| 1011006 | 结束答题成绩异常       | 结束时候由于异常情况下产生的结算异常            |
| 1011007 | 重复答题               | 该题在这个序列已经被做过了，再次被答题          |