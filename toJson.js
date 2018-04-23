const fs = require('fs');
var obj ={
    "lesson_title": "Where is the water?", //课件标题
    "lesson_points": "沙漠的特点以及沙漠中的植物和动物。", //课程学习内容
    "courseware": [
            //封面
        {
            "type": "display",
            "id": 1,
            "state": "01",
            "page": 0,
            "content_type": "封面",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 400,
                    "y": 100
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a"
            }
            },
        //跟读
        {
            "type": "read",
            "page": 1,
            "content_type": 0,
            "content": "Hello",
            "id": 2,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image":"./image/courseimg/2.png",
                "text": "Hello",
                "text_pos": {
                    "x": (1024/2)-(247/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //普通互动题
        {
            "type": "survey",
            "page": 2,
            "content_type": "",
            "content": "选择心情",
            "id": 3,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "titleImage": "./image/courseimg/3/3_03.png",
                "text_pos": {
                    "x": (1024/2)-(391/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/3/3_07.png",
                        "name": "happy",
                        "nameNum": 0,
                        "pos": {
                            "x": 124,
                            "y": 201
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/3/3_10.png",
                        "name": "depressed",
                        "nameNum": 0,
                        "pos": {
                            "x": 0,
                            "y": 467
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/3/3_12.png",
                        "name": "god",
                        "nameNum": 0,
                        "pos": {
                            "x": 256+12,
                            "y": 467
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }
                ]
            }
        },
        //普通互动题
        {
            "type": "survey",
            "page": 3,
            "content_type": "",
            "content": "问卷",
            "id": 4,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "titleImage": "./image/courseimg/4/4_03.png",
                "text_pos": {
                    "x": (1024/2)-(391/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/4/4_07.png",
                        "name": "desert",
                        "nameNum": 0,
                        "pos": {
                            "x": 156,
                            "y": 194
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/4/4_10.png",
                        "name": "ocean",
                        "nameNum": 0,
                        "pos": {
                            "x": 0,
                            "y": 482
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/4/4_12.png",
                        "name": "polar region",
                        "nameNum": 0,
                        "pos": {
                            "x": 20+297,
                            "y": 482
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }
                ]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 4,
            "content_type": 2,
            "content": "I am in desert.",
            "id": 5,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image":"./image/courseimg/5.png",
                "text": "I am in desert.",
                "text_pos": {
                    "x": (1024/2)-(485/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //多选
        {
            "type":"multiselect",
            "page":5,
            "content_type":"多选题",
            "content":"How is the weather",
            "id":6,
            "state":"05",
            "data":{
                "title":"",
                "text": "",
                "image": "",
                "fontSize":48,
                "fillColor":"#000000",
                "text_pos":{
                    "x":245,
                    "y":90
                },
                "background":"",
                "q_image":"./image/courseimg/6/6_03.png",
                "pos": {
                    "x":(1024/2)-(572/2),
                    "y":90
                },
                "ok_btnPos":{
                    "x":147,
                    "y":659
                },

                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/6/6_06.png",
                        "pos": {
                            "x": 0,
                            "y": 212
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/6/6_07.png",
                        "pos": {
                            "x": 294,
                            "y": 212
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/6/6_09.png",
                        "pos": {
                            "x": 0,
                            "y": 278+212
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/6/6_10.png",
                        "pos": {
                            "x": 294,
                            "y": 278+212
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    }
                ],

                "answer":[3,1]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 6,
            "content_type": 2,
            "content": "It is hot and dry.",
            "id": 7,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 583,
                    "y": 218
                },
                "title": "",
                "text_Image":"./image/courseimg/7.png",
                "text": "It is hot and dry.",
                "text_pos": {
                    "x": (1024/2)-(572/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示
        {
            "type": "display",
            "id": 8,
            "state": "01",
            "page": 7,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "./image/courseimg/8.png",
                "pos": {
                    "x":(1024/2)-(690/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"","pos":{"x":0,"y":242}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //展示
        {
            "type": "display",
            "id": 9,
            "state": "01",
            "page": 8,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x":(1024/2)-(690/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"./image/courseimg/9.png","pos":{"x":0,"y":189}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //问卷
        {
            "type": "survey",
            "page": 9,
            "content_type": "",
            "content": "问卷",
            "id": 10,
            "state": "07",
            "data": {
                "overviewImage": "./image/courseimg/10/10_05.png",
                "pos": {
                    "x": 0,
                    "y": 189
                },
                "title": "",
                "titleImage": "./image/courseimg/10/10_03.png",
                "text_pos": {
                    "x": (1024/2)-(406/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/10/10_07.png",
                        "name": "fox",
                        "nameNum": 0,
                        "pos": {
                            "x": 0,
                            "y": 189+290
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/10/10_09.png",
                        "name": "cactus",
                        "nameNum": 0,
                        "pos": {
                            "x": 0,
                            "y": 189+290+92
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/10/10_10.png",
                        "name": "grass",
                        "nameNum": 0,
                        "pos": {
                            "x": 0,
                            "y": 189+290+92+93
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }
                ]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 10,
            "content_type": 0,
            "content": "cactus",
            "id": 11,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "./image/courseimg/11/11_05.png",
                "pos": {
                    "x": 0,
                    "y": 189
                },
                "title": "",
                "text_Image":"./image/courseimg/11/11_03.png",
                "text": "cactus",
                "text_pos": {
                    "x": (1024/2)-(572/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },


        //展示
        {
            "type": "display",
            "id": 12,
            "state": "01",
            "page": 11,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "./image/courseimg/12.png",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"","pos":{"x":0,"y":242}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //展示
        {
            "type": "display",
            "id": 13,
            "state": "01",
            "page": 12,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"","pos":{"x":0,"y":242}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //跟读
        {
            "type": "read",
            "page": 13,
            "content_type": 0,
            "content": "So many different cacti.",
            "id": 14,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 583,
                    "y": 218
                },
                "title": "",
                "text_Image":"./image/courseimg/17.png",
                "text": "So many different cacti.",
                "text_pos": {
                    "x": (1024/2)-(649/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //单选
        {
            "type": "choice",
            "page": 14,
            "content_type": "单选题",
            "content": "What animal am l?",
            "id": 15,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/18/18_03.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(649/2),
                    "y": 90
                },
                "background": "",
                "q_image": "./image/courseimg/18/18_08.png",
                "qAdimation": "rotate",
                "animation": "",
                "pos": {
                    "x": 0,
                    "y": 189+125+130
                },
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/18/18_05.png",
                        "pos": {
                            "x": 0,
                            "y": 189
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/18/18_02.png",
                        "pos": {
                            "x": 0,
                            "y": 189+130
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }

                ],

                "answer": 1
            }
        },
        //多选
        {
            "type":"multiselect",
            "page":15,
            "content_type":"多选题",
            "content":"How is the weather",
            "id":16,
            "state":"05",
            "data":{
                "title":"",
                "text": "",
                "image": "./image/courseimg/19/19_09.png",
                "fontSize":48,
                "fillColor":"#000000",
                "text_pos":{
                    "x": 0,
                    "y": 189+125+130
                },
                "background":"",
                "q_image":"./image/courseimg/19/P19_03.png",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y":90
                },
                "ok_btnPos":{
                    "x":420,
                    "y":659
                },

                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/19/19_05.png",
                        "pos": {
                            "x": 0,
                            "y": 189
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/19/19_07.png",
                        "pos": {
                            "x": 0,
                            "y": 189+130
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/19/19_08.png",
                        "pos": {
                            "x": 0,
                            "y": 189+130+121
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    }
                ],

                "answer":[1,2]
            }
        },
        //展示
        {
            "type": "display",
            "id": 17,
            "state": "01",
            "page": 16,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"","pos":{"x":0,"y":242}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //展示
        {
            "type": "display",
            "id": 18,
            "state": "01",
            "page": 17,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "./image/courseimg/21/21_03.png",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"./image/courseimg/21/21_06.png","pos":{"x":0,"y":398}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //展示
        {
            "type": "display",
            "id": 19,
            "state": "01",
            "page": 18,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"./image/courseimg/22.png","pos":{"x":0,"y":166}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //普通互动题
        {
            "type": "survey",
            "page": 19,
            "content_type": "",
            "content": "问卷",
            "id": 20,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "titleImage": "./image/courseimg/23/23_03.png",
                "text_pos": {
                    "x": (1024/2)-(649/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/23/23_07.png",
                        "name": "lizard",
                        "nameNum": 0,
                        "pos": {
                            "x": 163,
                            "y":189
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/23/23_09.png",
                        "name": "camel",
                        "nameNum": 0,
                        "pos": {
                            "x": 0,
                            "y": 465
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/23/23_10.png",
                        "name": "rabbit",
                        "nameNum": 0,
                        "pos": {
                            "x": 335,
                            "y": 465
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }
                ]
            }
        },
        //跟读24PPT
        {
            "type": "read",
            "page": 20,
            "content_type": 2,
            "content": "Lizards live in the desert.",
            "id": 21,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "./image/courseimg/24/24_05.png",
                "pos": {
                    "x": 0,
                    "y": 189
                },
                "title": "",
                "text_Image":"./image/courseimg/24/24_03.png",
                "text": "Lizards live in the desert.",
                "text_pos": {
                    "x": (1024/2)-(649/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示
        {
            "type": "display",
            "id": 22,
            "state": "01",
            "page": 21,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "./image/courseimg/25/25_03.png",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"./image/courseimg/25/25_06.png","pos":{"x":0,"y":435}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //展示
        {
            "type": "display",
            "id": 23,
            "state": "01",
            "page": 22,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"","pos":{"x":0,"y":435}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //展示
        {
            "type": "display",
            "id": 24,
            "state": "01",
            "page": 23,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"./image/courseimg/27.png","pos":{"x":0,"y":213}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //普通互动题
        {
            "type": "survey",
            "page": 24,
            "content_type": "",
            "content": "问卷",
            "id": 25,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "titleImage": "./image/courseimg/28/28_03.png",
                "text_pos": {
                    "x": (1024/2)-(521/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/28/28_07.png",
                        "name": "whale",
                        "nameNum": 0,
                        "pos": {
                            "x": 163,
                            "y": 216
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/28/28_06.png",
                        "name": "camel",
                        "nameNum": 0,
                        "pos": {
                            "x": 0,
                            "y": 492
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/28/28_10.png",
                        "name": "rabbit",
                        "nameNum": 0,
                        "pos": {
                            "x": 335,
                            "y": 492
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }
                ]
            }
        },
        //跟读29PPT
        {
            "type": "read",
            "page": 25,
            "content_type": 2,
            "content": "Camels live in the desert.",
            "id": 26,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "./image/courseimg/29/29_05.png",
                "pos": {
                    "x": 0,
                    "y": 189
                },
                "title": "",
                "text_Image":"./image/courseimg/29/29_03.png",
                "text": "Camels live in the desert.",
                "text_pos": {
                    "x": (1024/2)-(615/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示
        {
            "type": "display",
            "id": 27,
            "state": "01",
            "page": 26,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x":(1024/2)-(649/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"","pos":{"x":0,"y":213}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //展示
        {
            "type": "display",
            "id": 28,
            "state": "01",
            "page": 27,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "./image/courseimg/31.png",
                "pos": {
                    "x":(1024/2)-(411/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"","pos":{"x":0,"y":90}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //展示
        {
            "type": "display",
            "id": 29,
            "state": "01",
            "page": 28,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "./image/courseimg/32.png",
                "pos": {
                    "x":(1024/2)-(411/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"","pos":{"x":0,"y":90}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },
        //单选
        {
            "type": "choice",
            "page": 29,
            "content_type": "单选题",
            "content": "How is the weather now ?",
            "id": 30,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/33/33_03.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(631/2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "qAdimation": "rotate",
                "animation": "",
                "pos": {
                    "x": 0,
                    "y": 189+125+130
                },
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/33/33_06.png",
                        "pos": {
                            "x": 0,
                            "y": 372
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/33/33_08.png",
                        "pos": {
                            "x": 0,
                            "y": 370+171
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }

                ],

                "answer": 1
            }
        },
        //多选
        {
            "type":"multiselect",
            "page":30,
            "content_type":"多选题",
            "content":"How is the weather",
            "id":31,
            "state":"05",
            "data":{
                "title":"",
                "text": "",
                "image": "",
                "fontSize":48,
                "fillColor":"#000000",
                "text_pos":{
                    "x": 0,
                    "y": 189+125+130
                },
                "background":"",
                "q_image":"./image/courseimg/34/34_03.png",
                "pos": {
                    "x":(1024/2)-(745/2),
                    "y":90
                },
                "ok_btnPos":{
                    "x":420,
                    "y":659
                },

                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/34/34_06.png",
                        "pos": {
                            "x": 160,
                            "y": 90+109
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/34/34_08.png",
                        "pos": {
                            "x": 0,
                            "y": 90+109+240
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/34/34_09.png",
                        "pos": {
                            "x":335,
                            "y":90+109+240
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    }
                ],

                "answer":[1,0]
            }
        },


        //跟读29PPT
        {
            "type": "read",
            "page": 31,
            "content_type": 2,
            "content": "I need a tent.",
            "id": 32,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 189
                },
                "title": "",
                "text_Image":"./image/courseimg/35_03.png",
                "text": "I need a tent.",
                "text_pos": {
                    "x": (1024/2)-(420/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //跟读29PPT
        {
            "type": "read",
            "page": 32,
            "content_type": 2,
            "content": "I need to build a fire.",
            "id": 33,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "./image/courseimg/36/36_02.png",
                "pos": {
                    "x": 0,
                    "y": 478
                },
                "title": "",
                "text_Image":"./image/courseimg/36/36_03.png",
                "text": "I need to build a fire.",
                "text_pos": {
                    "x": (1024/2)-(563/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示
        {
            "type": "display",
            "id": 34,
            "state": "01",
            "page": 33,
            "content_type": "展示",
            "data": {
                "background_image": "",
                "overviewImage": "./image/courseimg/37/37_03.png",
                "pos": {
                    "x":(1024/2)-(563/2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "body":[{"image":"./image/courseimg/37/37_02.png","pos":{"x":0,"y":478}}],
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        },



        
    ]
}

fs.writeFile('./my.json',JSON.stringify(obj),()=>{})