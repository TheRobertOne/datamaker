const fs = require('fs');
var obj = {
    "lesson_title": "Super Firefighter", //课件标题
    "lesson_points": "家庭安全知识以及火灾发生的应对办法。", //课程学习内容
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
                    "x": (1024/2)-(250/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //问卷
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
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/3/3.png",
                "text_pos": {
                    "x": (1024/2)-(339/2),
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
                            "x": 161,
                            "y": 205
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
                        "image": "./image/courseimg/3/3-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 451
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
                        "image": "./image/courseimg/3/3-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 303,
                            "y": 451
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }
                ]
            }
        },
        //展示页
        {
            "type": "display",
            "id": 4,
            "state": "01",
            "page": 3,
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
                "body":[{"image":"./image/courseimg/4.png","pos":{"x":(1024/2)-(416/2),"y":90}}]
            }
        },
        //问卷
        {
            "type": "survey",
            "page": 4,
            "content_type": "",
            "content": "",
            "id": 5,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/5/5.png",
                "text_pos": {
                    "x": (1024/2)-(416/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/5/5-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 161,
                            "y": 205
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
                        "image": "./image/courseimg/5/5-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 451
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
                        "image": "./image/courseimg/5/5-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 303,
                            "y": 451
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
            "page": 5,
            "content_type": 2,
            "content": "light a candle.",
            "id": 6,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "text_Image":"./image/courseimg/6.png",
                "text": "light a candle.",
                "text_pos": {
                    "x": (1024/2)-(416/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //问卷
        {
            "type": "survey",
            "page": 6,
            "content_type": "",
            "content": "",
            "id": 7,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/7/7.png",
                "text_pos": {
                    "x": (1024/2)-(468/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/7/7-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 162,
                            "y": 205
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
                        "image": "./image/courseimg/7/7-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 34,
                            "y": 451
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
                        "image": "./image/courseimg/7/7-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 303,
                            "y": 451
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
            "page": 7,
            "content_type": 2,
            "content": "We need a match.",
            "id": 8,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "text_Image":"./image/courseimg/8.png",
                "text": "We need a match.",
                "text_pos": {
                    "x": (1024/2)-(416/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示页整页
        {
            "type": "display",
            "id": 9,
            "state": "01",
            "page": 8,
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
                "body":[{"image":"./image/courseimg/9.png","pos":{"x":0,"y":0}}]
            }
        },
        //空白页
        {
            "type": "display",
            "id": 10,
            "state": "01",
            "page": 9,
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
        //问卷
        {
            "type": "survey",
            "page": 10,
            "content_type": "",
            "content": "",
            "id": 11,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/11/11.png",
                "text_pos": {
                    "x": (1024/2)-(416/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/11/11-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 34,
                            "y": 202
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
                        "image": "./image/courseimg/11/11-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 34,
                            "y": 451
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
            "page": 11,
            "content_type": 2,
            "content": "There is a smoke.",
            "id": 12,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "text_Image":"./image/courseimg/12.png",
                "text": "There is a smoke.",
                "text_pos": {
                    "x": (1024/2)-(416/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示页BT
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
                "body":[{"image":"./image/courseimg/13.png","pos":{"x":(1024/2)-(378/2),"y":90}}]
            }
        },
        //展示页BT
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
                "body":[{"image":"./image/courseimg/14.png","pos":{"x":(1024/2)-(378/2),"y":90}}]
            }
        },
        //问卷
        {
            "type": "survey",
            "page": 14,
            "content_type": "",
            "content": "",
            "id": 15,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/15/15.png",
                "text_pos": {
                    "x": (1024/2)-(402/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/15/15-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 47,
                            "y": 218
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
                        "image": "./image/courseimg/15/15-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 47,
                            "y": 446
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }
                ]
            }
        },
        //展示页BT
        {
            "type": "display",
            "id": 16,
            "state": "01",
            "page": 15,
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
                "body":[{"image":"./image/courseimg/16.png","pos":{"x":(1024/2)-(402/2),"y":90}}]
            }
        },
        //展示页BT
        {
            "type": "display",
            "id": 17,
            "state": "01",
            "page": 16,
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
                "body":[{"image":"./image/courseimg/17/17.png","pos":{"x":(1024/2)-(618/2),"y":90}},
                    {"image":"./image/courseimg/17/17_03.png","pos":{"x":585,"y":173}}]
            }
        },
        //空白页
        {
            "type": "display",
            "id": 18,
            "state": "01",
            "page": 17,
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
        //问卷
        {
            "type": "survey",
            "page": 18,
            "content_type": "",
            "content": "",
            "id": 19,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/19/19.png",
                "text_pos": {
                    "x": (1024/2)-(469/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/19/19-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 250
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
                        "image": "./image/courseimg/19/19-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 391
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
            "page": 19,
            "content_type": 2,
            "content": "Is it unsafe.",
            "id": 20,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "text_Image":"./image/courseimg/20.png",
                "text": "Is it unsafe.",
                "text_pos": {
                    "x": (1024/2)-(378/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //问卷
        {
            "type": "survey",
            "page": 20,
            "content_type": "",
            "content": "",
            "id": 21,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/21/21.png",
                "text_pos": {
                    "x": (1024/2)-(623/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/21/21-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 202
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
                        "image": "./image/courseimg/21/21-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 451
                        },
                        "size": {
                            "w": 100,
                            "h": 100
                        }
                    }
                ]
            }
        },
        //展示页整页
        {
            "type": "display",
            "id": 22,
            "state": "01",
            "page": 21,
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
                "body":[{"image":"./image/courseimg/22.png","pos":{"x":0,"y":0}}]
            }
        },
        //空白页
        {
            "type": "display",
            "id": 23,
            "state": "01",
            "page": 22,
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
        //问卷
        {
            "type": "survey",
            "page": 23,
            "content_type": "",
            "content": "",
            "id": 24,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/24/24.png",
                "text_pos": {
                    "x": (1024/2)-(416/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/24/24-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 250
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
                        "image": "./image/courseimg/24/24-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 391
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
                        "image": "./image/courseimg/24/24-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 532
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
            "page": 24,
            "content_type": 2,
            "content": "Let’s call the fire station.",
            "id": 25,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "text_Image":"./image/courseimg/25.png",
                "text": "Let’s call the fire station.",
                "text_pos": {
                    "x": (1024/2)-(561/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //问卷
        {
            "type": "survey",
            "page": 25,
            "content_type": "",
            "content": "",
            "id": 26,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/26/26.png",
                "text_pos": {
                    "x": (1024/2)-(688/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/26/26-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 250
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
                        "image": "./image/courseimg/26/26-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 391
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
                        "image": "./image/courseimg/26/26-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 532
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
            "page": 26,
            "content_type": 2,
            "content": "Let’s call 119.",
            "id": 27,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "text_Image":"./image/courseimg/27.png",
                "text": "Let’s call 119.",
                "text_pos": {
                    "x": (1024/2)-(415/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //空白页
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
        //展示页整页
        {
            "type": "display",
            "id": 29,
            "state": "01",
            "page": 28,
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
                "body":[{"image":"./image/courseimg/29.png","pos":{"x":(1024/2)-(468/2),"y":90}}]
            }
        },
        //问卷
        {
            "type": "survey",
            "page": 29,
            "content_type": "",
            "content": "",
            "id": 30,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 328,
                    "y": 565
                },
                "title": "",
                "titleImage": "./image/courseimg/30/30.png",
                "text_pos": {
                    "x": (1024/2)-(469/2),
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
                            "x": 33,
                            "y": 250
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
                        "image": "./image/courseimg/30/30-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x": 33,
                            "y": 391
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
            "page": 30,
            "content_type": 2,
            "content": "It is unsafe.",
            "id": 31,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "text_Image":"./image/courseimg/31.png",
                "text": "It is unsafe.",
                "text_pos": {
                    "x": (1024/2)-(366/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //跟读
        {
            "type": "read",
            "page": 31,
            "content_type": 2,
            "content": "Now we are safe.",
            "id": 32,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "text_Image":"./image/courseimg/32.png",
                "text": "Now we are safe.",
                "text_pos": {
                    "x": (1024/2)-(417/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //拼图题ok
        {
            "type": "jigsaw", //资源
            "id": 33,
            "state": "09",//题型
            "page": 32,
            "content_type": "",
            "data":{
                "title_img":"",
                "text_pos": {
                    "x": (1024/2)-(175/2),
                    "y": 90
                },
                "item":[{
                    "image": "./image/courseimg/33/33_03.png",
                    "pos":{"x":25,"y":174}
                }],//所有展示数据 无就空
                //透明框
                "groupA":[
                    {
                        "image": "./image/courseimg/33/33.1_03.png",
                        "pos":{"x":93,"y":231},
                        "answer":0
                    },
                    {
                        "image": "./image/courseimg/33/33.1_10.png",
                        "pos":{"x":94,"y":391},
                        "answer":1
                    },
                    {
                        "image": "./image/courseimg/33/33.1_19.png",
                        "pos":{"x":94,"y":549},
                        "answer":2
                    }

                ],
                //拖动选项卡
                "groupB":[
                    {
                        "image": "./image/courseimg/33/33_06.png",
                        "pos":{"x":660,"y":267}
                    },
                    {
                        "image": "./image/courseimg/33/33_14.png",
                        "pos":{"x":548,"y":437}
                    },
                    {
                        "image": "./image/courseimg/33/33_16.png",
                        "pos":{"x":778,"y":437}
                    }
                ],
            }

        },
        //单选
        {
            "type": "choice",
            "page": 33,
            "content_type": "",
            "content": "",
            "id": 34,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/34/34.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(410/2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "pos": {
                    "x":0,
                    "y":70
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/34/34-1.png",
                        "pos": {
                            "x": 33,
                            "y": 202
                        },
                        "size": {
                            "w": 104,
                            "h": 104
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/34/34-2.png",
                        "pos": {
                            "x": 33,
                            "y": 451
                        },
                        "size": {
                            "w": 104,
                            "h": 104
                        }
                    }
                ],
                "answer": 1
            }
        },
        //多选
        {
            "type":"multiselect",
            "page":34,
            "content_type":"",
            "content":"",
            "id":35,
            "state":"05",
            "data":{
                "title":"",
                "text": "",
                "image": "./image/courseimg/35/35.png",
                "fontSize":48,
                "fillColor":"#000000",
                "text_pos":{
                    "x":(1024/2)-(438/2),
                    "y":90
                },
                "background":"",
                "q_image":"",
                "pos": {
                    "x":0,
                    "y":521
                },
                "ok_btnPos":{
                    "x":450,
                    "y":675
                },

                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/35/35-1.png",
                        "pos": {
                            "x": 28,
                            "y": 198
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
                        "image": "./image/courseimg/35/35-2.png",
                        "pos": {
                            "x": 280,
                            "y": 198
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
                        "image": "./image/courseimg/35/35-3.png",
                        "pos": {
                            "x": 28,
                            "y": 427
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
                        "image": "./image/courseimg/35/35-4.png",
                        "pos": {
                            "x": 280,
                            "y": 427
                        },
                        "size":{
                            "w":100,
                            "h":100
                        }
                    }
                ],

                "answer":[1,3]
            }
        },
        //展示页BT
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
                "body":[{"image":"./image/courseimg/36.png","pos":{"x":(1024/2)-(257/2),"y":90}}]
            }
        },
        //空白页
        {
            "type": "display",
            "id": 37,
            "state": "01",
            "page": 36,
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
        }

    ]
}

fs.writeFile('./my.json',JSON.stringify(obj),()=>{})