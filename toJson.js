const fs = require('fs');
var obj = {
    "lesson_title": "Where’s my donut?", //课件标题
    "lesson_points": "看，听，闻，尝四个不同感官，并知道了要有付出才能有收获的道理。", //课程学习内容
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
                    "y": 0
                },
                "title": "",
                "text_Image":"./image/courseimg/2.png",
                "text": "Hello",
                "text_pos": {
                    "x": (1024/2)-(217/2),
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
            "content": "",
            "id": 3,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "titleImage": "./image/courseimg/3/3.png",
                "text_pos": {
                    "x": (1024/2)-(440/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/3/3-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 689,
                            "y": 183
                        },
                        "size": {
                            "w": 169,
                            "h": 199
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/3/3-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x":539,
                            "y":388
                        },
                        "size": {
                            "w": 174,
                            "h": 199
                        }
                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/3/3-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 789,
                            "y": 400
                        },
                        "size": {
                            "w": 185,
                            "h": 197
                        }
                    }
                ]
            }
        },
        //单选
        {
            "type": "choice",
            "page": 3,
            "content_type": "",
            "content": "",
            "id": 4,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/4/4.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(645/2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "pos": {
                    "x":480,
                    "y":463
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/4/4-1.png",
                        "pos": {
                            "x": 247,
                            "y": 499
                        },
                        "size": {
                            "w": 226,
                            "h": 212
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/4/4-2.png",
                        "pos": {
                            "x": 508,
                            "y": 497
                        },
                        "size": {
                            "w": 226,
                            "h": 121
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/4/4-3.png",
                        "pos": {
                            "x": 762,
                            "y": 498
                        },
                        "size": {
                            "w": 226,
                            "h": 121
                        }
                    }
                ],
                "answer": 1
            }
        },
        //展示页
        {
            "type": "display",
            "id": 5,
            "state": "01",
            "page": 4,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"./image/courseimg/5.png","pos":{"x":0,"y":0}}]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 6,
            "state": "01",
            "page": 5,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"./image/courseimg/6.png","pos":{"x":(1024-570)/2,"y":90}}]
            }
        },
        //空白页
        {
            "type": "display",
            "id": 7,
            "state": "01",
            "page": 6,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 7,
            "content_type": 0,
            "content": "eagle",
            "id": 8,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/8/8-1.png",
                "pos": {
                    "x": 39,
                    "y": 487
                },
                "title": "",
                "text_Image":"./image/courseimg/8/8.png",
                "text": "eagle",
                "text_pos": {
                    "x": (1024/2)-(212/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //普通互动题
        {
            "type": "survey",
            "page": 8,
            "content_type": "",
            "content": "",
            "id": 9,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "titleImage": "./image/courseimg/9/9.png",
                "text_pos": {
                    "x": (1024/2)-(548/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/9/9-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 441,
                            "y": 301
                        },
                        "size": {
                            "w": 204,
                            "h": 179
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/9/9-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x":433,
                            "y":494
                        },
                        "size": {
                            "w": 203,
                            "h": 182
                        }
                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/9/9-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 39,
                            "y": 487
                        },
                        "size": {
                            "w": 227,
                            "h": 269
                        }
                    }
                ]
            }
        },
        //单选
        {
            "type": "choice",
            "page": 9,
            "content_type": "",
            "content": "",
            "id": 10,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/10/10.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(598/2),
                    "y": 90
                },
                "background": "",
                "q_image": "./image/courseimg/10/10-4.png",
                "pos": {
                    "x":39,
                    "y":487
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/10/10-1.png",
                        "pos": {
                            "x": 399,
                            "y": 252
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/10/10-2.png",
                        "pos": {
                            "x": 289,
                            "y": 464
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/10/10-3.png",
                        "pos": {
                            "x": 522,
                            "y": 464
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    }
                ],
                "answer": 0
            }
        },
        //跟读
        {
            "type": "read",
            "page": 10,
            "content_type": 2,
            "content": " I can see with my eyes.",
            "id": 11,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/11/11-1.png",
                "pos": {
                    "x": 39,
                    "y": 487
                },
                "title": "",
                "text_Image":"./image/courseimg/11/11.png",
                "text": " I can see with my eyes.",
                "text_pos": {
                    "x": (1024/2)-(512/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示页
        {
            "type": "display",
            "id": 12,
            "state": "01",
            "page": 11,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 13,
            "state": "01",
            "page": 12,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"./image/courseimg/13.png","pos":{"x":39,"y":487}}]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 14,
            "state": "01",
            "page": 13,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 14,
            "content_type": 0,
            "content": "fox",
            "id": 15,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/15/15-1.png",
                "pos": {
                    "x": 0,
                    "y": 432
                },
                "title": "",
                "text_Image":"./image/courseimg/15/15.png",
                "text": "fox",
                "text_pos": {
                    "x": (1024/2)-(168/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //普通互动题
        {
            "type": "survey",
            "page": 15,
            "content_type": "",
            "content": "",
            "id": 16,
            "state": "07",
            "data": {
                "overviewImage": "./image/courseimg/16/16-3.png",
                "pos": {
                    "x": 0,
                    "y": 432
                },
                "title": "",
                "titleImage": "./image/courseimg/16/16.png",
                "text_pos": {
                    "x": (1024/2)-(512/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/16/16-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 441,
                            "y": 301
                        },
                        "size": {
                            "w": 204,
                            "h": 179
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/16/16-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x":433,
                            "y":494
                        },
                        "size": {
                            "w": 203,
                            "h": 182
                        }
                    }
                ]
            }
        },
        //单选
        {
            "type": "choice",
            "page": 16,
            "content_type": "",
            "content": "",
            "id": 17,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/17/17.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(598/2),
                    "y": 90
                },
                "background": "",
                "q_image": "./image/courseimg/17/17-4.png",
                "pos": {
                    "x":0,
                    "y":432
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/17/17-1.png",
                        "pos": {
                            "x": 399,
                            "y": 252
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/17/17-2.png",
                        "pos": {
                            "x": 289,
                            "y": 464
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/17/17-3.png",
                        "pos": {
                            "x": 522,
                            "y": 464
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    }
                ],
                "answer": 1
            }
        },
        //跟读
        {
            "type": "read",
            "page": 17,
            "content_type": 2,
            "content": "I can hear with my ears.",
            "id": 18,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/18/18-1.png",
                "pos": {
                    "x": 0,
                    "y": 432
                },
                "title": "",
                "text_Image":"./image/courseimg/18/18.png",
                "text": "I can hear with my ears.",
                "text_pos": {
                    "x": (1024/2)-(521/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示页
        {
            "type": "display",
            "id": 19,
            "state": "01",
            "page": 18,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 20,
            "state": "01",
            "page": 19,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"./image/courseimg/20.png","pos":{"x":0,"y":432}}]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 21,
            "state": "01",
            "page": 20,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"./image/courseimg/21.png","pos":{"x":0,"y":627}}]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 21,
            "content_type": 0,
            "content": "dog",
            "id": 22,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/22/22-1.png",
                "pos": {
                    "x": 96,
                    "y": 504
                },
                "title": "",
                "text_Image":"./image/courseimg/22/22.png",
                "text": "dog",
                "text_pos": {
                    "x": (1024/2)-(168/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //普通互动题
        {
            "type": "survey",
            "page": 22,
            "content_type": "",
            "content": "",
            "id": 23,
            "state": "07",
            "data": {
                "overviewImage": "./image/courseimg/23/23-3.png",
                "pos": {
                    "x": 96,
                    "y": 504
                },
                "title": "",
                "titleImage": "./image/courseimg/23/23.png",
                "text_pos": {
                    "x": (1024/2)-(512/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/23/23-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 361,
                            "y": 301
                        },
                        "size": {
                            "w": 204,
                            "h": 179
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/23/23-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x":353,
                            "y":494
                        },
                        "size": {
                            "w": 203,
                            "h": 182
                        }
                    }
                ]
            }
        },
        //单选
        {
            "type": "choice",
            "page": 23,
            "content_type": "",
            "content": "",
            "id": 24,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/24/24.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(598/2),
                    "y": 90
                },
                "background": "",
                "q_image": "./image/courseimg/24/24-4.png",
                "pos": {
                    "x":0,
                    "y":432
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/24/24-1.png",
                        "pos": {
                            "x": 399,
                            "y": 252
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/24/24-2.png",
                        "pos": {
                            "x": 289,
                            "y": 464
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/24/24-3.png",
                        "pos": {
                            "x": 522,
                            "y": 464
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    }
                ],
                "answer": 2
            }
        },
        //跟读
        {
            "type": "read",
            "page": 24,
            "content_type": 2,
            "content": "I can smell with my nose.",
            "id": 25,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/25/25-1.png",
                "pos": {
                    "x": 96,
                    "y": 504
                },
                "title": "",
                "text_Image":"./image/courseimg/25/25.png",
                "text": "I can smell with my nose.",
                "text_pos": {
                    "x": (1024/2)-(554/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示页
        {
            "type": "display",
            "id": 26,
            "state": "01",
            "page": 25,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 27,
            "state": "01",
            "page": 26,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"./image/courseimg/27.png","pos":{"x":96,"y":504}}]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 28,
            "state": "01",
            "page": 27,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 28,
            "content_type": 0,
            "content": "pig",
            "id": 29,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/29/29-1.png",
                "pos": {
                    "x": 53,
                    "y": 480
                },
                "title": "",
                "text_Image":"./image/courseimg/29/29.png",
                "text": "pig",
                "text_pos": {
                    "x": (1024/2)-(131/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //普通互动题
        {
            "type": "survey",
            "page": 29,
            "content_type": "",
            "content": "",
            "id": 30,
            "state": "07",
            "data": {
                "overviewImage": "./image/courseimg/31/31-4.png",
                "pos": {
                    "x": 53,
                    "y": 480
                },
                "title": "",
                "titleImage": "./image/courseimg/30/30.png",
                "text_pos": {
                    "x": (1024/2)-(472/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/30/30-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 400,
                            "y": 205
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/30/30-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x":272,
                            "y":451
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/30/30-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 542,
                            "y": 451
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    }
                ]
            }
        },
        //单选
        {
            "type": "choice",
            "page": 30,
            "content_type": "",
            "content": "",
            "id": 31,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/31/31.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(598/2),
                    "y": 90
                },
                "background": "",
                "q_image": "./image/courseimg/31/31-4.png",
                "pos": {
                    "x":53,
                    "y":480
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/31/31-1.png",
                        "pos": {
                            "x": 399,
                            "y": 252
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/31/30-2.png",
                        "pos": {
                            "x": 289,
                            "y": 464
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/31/30-3.png",
                        "pos": {
                            "x": 522,
                            "y": 464
                        },
                        "size": {
                            "w": 223,
                            "h": 192
                        }
                    }
                ],
                "answer": 0
            }
        },
        //跟读
        {
            "type": "read",
            "page": 31,
            "content_type": 2,
            "content": " I can taste with my tongue.",
            "id": 32,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/32/32-1.png",
                "pos": {
                    "x": 53,
                    "y": 480
                },
                "title": "",
                "text_Image":"./image/courseimg/32/32.png",
                "text": " I can taste with my tongue.",
                "text_pos": {
                    "x": (1024/2)-(597/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示页
        {
            "type": "display",
            "id": 33,
            "state": "01",
            "page": 32,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //普通互动题
        {
            "type": "survey",
            "page": 33,
            "content_type": "",
            "content": "",
            "id": 34,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "titleImage": "./image/courseimg/34/34.png",
                "text_pos": {
                    "x": (1024/2)-(704/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/34/34-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 43,
                            "y": 247
                        },
                        "size": {
                            "w": 242,
                            "h": 212
                        }

                    },
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/34/34-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x":32,
                            "y":475
                        },
                        "size": {
                            "w": 242,
                            "h": 216
                        }
                    }
                ]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 35,
            "state": "01",
            "page": 34,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 36,
            "state": "01",
            "page": 35,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": 18,
                    "y": 458
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a",
                "body":[{"image":"./image/courseimg/36.png","pos":{"x":(1024-179)/2,"y":90}}]
            }
        }
    ]
}

fs.writeFile('./my.json',JSON.stringify(obj),()=>{})