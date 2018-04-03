# js&&native交互文档(Justin)

**注：**本文档主要对Justin负责的开发模块作详细描述

@(阅读对象)[技术人员，测试人员]

| 版本 | 作者 | 最后修改日期 |
| :---: | :------:| :--: | :----: |
|v1.0.0  |Justin|  2018/03/28   |

# js需注册api如下：

## 1.enableAnswer(tid)

>功能描述

 	释放答题权限，发生场景在主播老师说GO后执行此api，此时学生进入答题倒数状态，对应打点文件的start.test

>参数说明

| 字段名 | 说明  |
| ------------ | ------------ |
| tid  | 打点文件的tid  |

>返回值

  	{"type":"read","read_type":"word","read_content":"hello"}

| 字段名 | 说明  |
| ------------ | ------------ |
| type  | 当前题的类型，如果为read类型会有read_type和read_content字段、目前只处理read类型  |
| read_type  | 跟读类型，跟读单词(word)或者句子(sentence) |
| read_content  | 跟读内容 |
-------------------

## 2.disableAnswer()

>功能描述

 	关闭答题权限，发生场景在打点文件的stop.test事件

>所需参数

无

>返回值

无

-------------------

## 3.jumpQuestion(page)

>功能描述

 	跳转到某题，根据打点文件的pageIndex字段

>参数说明

| 字段名 | 说明  |
| ------------ | ------------ |
| page  | 打点文件的pageIndex字段  |

>返回值

无

-------------------

## 4.stopRecord(object)

>功能描述

 	返回语音评测分数

>参数说明

    {"code":"success","score":88.88,"qnum":1}

| 字段名 | 说明  |
| ------------ | ------------ |
| code  | 状态  |
| score  | 评测得分  |
| qnum  | 题号  |

>返回值

 无

-------------------

## 5.setTotalStar(total_star)

>功能描述

 	set目前总星星数

>参数说明

| 字段名 | 说明  |
| ------------ | ------------ |
| total_star  | 星星数量  |

>返回值

 无

-------------------

## 6.shwoTopThree(array)

>功能描述

展示上榜的三人

>参数说明

    [{_id: "5ab898001902ed3faaaf657a", lesson_id: 1234, uid: 124, qnum: 2, group: "0",avatar:"http://"},{_id: "5ab898001902ed3faaaf657a", lesson_id: 1234, uid: 124, qnum: 2, group: "0",avatar:"http://"},{_id: "5ab898001902ed3faaaf657a", lesson_id: 1234, uid: 124, qnum: 2, group: "0",avatar:"http://"}];

>返回值

 无

-------------------

# native需注册api如下：

## 1.echo.courseLoaded(object)

>功能描述

 	课件加载完毕回调事件

>参数说明

    {"courseData":"[]"}

| 字段名 | 说明  |
| ------------ | ------------ |
| courseData  | 课件的题型数据  |

>返回值

  无
-------------------

## 2.echo.uploadScore(object)

>功能描述

 	上传得星数

>参数说明

   {"num":3,"page":1}

| 字段名 | 说明  |
| ------------ | ------------ |
| num  | 星星数  |
| page  | 题号  |

>返回值

  无

-------------------

## 3.echo.putVoteData(object)

>功能描述

 	上传投票数据

>参数说明

   {"item":"a","page":1}

| 字段名 | 说明  |
| ------------ | ------------ |
| item  | 选项  |
| page  | 题号  |

>返回值

  无

-------------------

## 4.echo.getVoteData(object)

>功能描述

 	获取投票数据

>参数说明

    {"items":"a,b,c","page":1}

| 字段名 | 说明  |
| ------------ | ------------ |
| items  | 所有选项  |
| page  | 题号  |

>返回值

    {"a":12,"b":11,"c":123}

| 字段名 | 说明  |
| ------------ | ------------ |
| key  | 选项  |
| value  | 票数  |

-------------------

## 5.echo.getRank()

>功能描述

 	获取小组排名

>参数说明

   无

>返回值

    返回socket.io top group所获取的数据

-------------------