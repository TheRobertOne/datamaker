/**
 * Created by klaus on 16/10/13.
 * 获取 IBL 直播课 预览数据
 */

var json_data;
var what = null;

function get_value() {
    var pare = window.opener;

    if (pare != null) {
        what = pare.temp_data;

        return what;
    }
    return null;
};
if (what == null) {
    json_data = {
        "lesson_title": "Explore the Solar System", //课件标题
        "lesson_points": "太阳系中不同的星球及星球的特点，如离地球最近的火星，温度最高的金星，最大的木星等。",//课程学习内容
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
                        "x": (1024/2)-(311/2),
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
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/3/3.png",
                    "text_pos": {
                        "x": (1024/2)-(501/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/3/3_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 227,
                                "y": 230
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
                            "image": "./image/courseimg/3/3_03.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 123,
                                "y": 408
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
                            "image": "./image/courseimg/3/3_02.png",
                            "name": "c",
                            "nameNum": 0,
                            "pos": {
                                "x":307,
                                "y":382
                            },
                            "size": {
                                "w": 100,
                                "h": 100
                            }
                        }
                    ]
                }
            },
            //展示页 标题
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/4.png","pos":{"x":(1024/2)-(854/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //普通互动题
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
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "",
                    "text_pos": {
                        "x": (1024/2)-(501/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/5/5_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 119,
                                "y": 272
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
                            "image": "./image/courseimg/5/5_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 119,
                                "y": 441
                            },
                            "size": {
                                "w": 100,
                                "h": 100
                            }
                        }
                    ]
                }
            },
            //跟读 无标题
            {
                "type": "read",
                "page": 5,
                "content_type": 2,
                "content": "Earth is a planet.",
                "id": 6,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "text_Image":"",
                    "text": "Earth is a planet.",
                    "text_pos": {
                        "x": (1024/2)-(311/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"","pos":{"x":0,"y":219}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //问卷
            {
                "type": "survey",
                "page": 7,
                "content_type": "",
                "content": "",
                "id": 8,
                "state": "07",
                "data": {
                    "overviewImage": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/8/8.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/8/8_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 24,
                                "y": 255
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
                            "image": "./image/courseimg/8/8_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 24,
                                "y": 472
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
                "page": 8,
                "content_type": 2,
                "content": "Earth goes around the sun",
                "id": 9,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "./image/courseimg/9/9-01.png",
                    "pos": {
                        "x": 0,
                        "y": 205
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/9/9.png",
                    "text": "Earth goes around the sun.",
                    "text_pos": {
                        "x": (1024/2)-(854/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"","pos":{"x":0,"y":219}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //跟读
            {
                "type": "read",
                "page": 10,
                "content_type": 1,
                "content": "solar system",
                "id": 11,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 0,
                        "y": 205
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/11.png",
                    "text": "solar system",
                    "text_pos": {
                        "x": (1024/2)-(854/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //展示页 标题
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/12.png","pos":{"x":(1024/2)-(854/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //问卷
            {
                "type": "survey",
                "page": 12,
                "content_type": "",
                "content": "",
                "id": 13,
                "state": "07",
                "data": {
                    "overviewImage": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/13/13.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/13/13_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 343,
                                "y": 342
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
                            "image": "./image/courseimg/13/13_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 452,
                                "y": 342
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
                "page": 13,
                "content_type": 2,
                "content": "Mars is the closest planet to Earth.",
                "id": 14,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 0,
                        "y": 205
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/14.png",
                    "text": "Mars is the closest planet to Earth.",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //展示页 标题
            {
                "type": "display",
                "id": 15,
                "state": "01",
                "page": 14,
                "content_type": "",
                "data": {
                    "background_image": "",
                    "overviewImage": "",
                    "pos": {
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/15.png","pos":{"x":(1024/2)-(1024/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //空白页
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"","pos":{"x":0,"y":219}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //跟读
            {
                "type": "read",
                "page": 16,
                "content_type": 2,
                "content": "We can send the robot to Mars.",
                "id": 17,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 0,
                        "y": 205
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/18.png",
                    "text": "We can send the robot to Mars.",
                    "text_pos": {
                        "x": (1024/2)-(795/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //问卷19
            {
                "type": "survey",
                "page": 17,
                "content_type": "",
                "content": "",
                "id": 18,
                "state": "07",
                "data": {
                    "overviewImage": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/19/19.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/19/19_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 0,
                                "y": 259
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
                            "image": "./image/courseimg/19/19_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 0,
                                "y": 401
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
                            "image": "./image/courseimg/19/19_03.png",
                            "name": "c",
                            "nameNum": 0,
                            "pos": {
                                "x":0,
                                "y":542
                            },
                            "size": {
                                "w": 100,
                                "h": 100
                            }
                        }
                    ]
                }
            },
            //空白页
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"","pos":{"x":0,"y":219}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //问卷19
            {
                "type": "survey",
                "page": 19,
                "content_type": "",
                "content": "",
                "id": 20,
                "state": "07",
                "data": {
                    "overviewImage": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/21/21.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/21/21_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 341,
                                "y": 345
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
                            "image": "./image/courseimg/21/21_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 449,
                                "y": 347
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
                            "image": "./image/courseimg/21/21_03.png",
                            "name": "c",
                            "nameNum": 0,
                            "pos": {
                                "x":572,
                                "y":226
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
                "page": 20,
                "content_type": 2,
                "content": "Venus is the hottest planet.",
                "id": 21,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 0,
                        "y": 205
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/22.png",
                    "text": "Venus is the hottest planet.",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //展示页 标题23
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/23.png","pos":{"x":(1024/2)-(1024/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //问卷24？？
            {
                "type": "survey",
                "page": 22,
                "content_type": "",
                "content": "",
                "id": 23,
                "state": "07",
                "data": {
                    "overviewImage": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/24/24.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/24/24_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 0,
                                "y": 259
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
                            "image": "./image/courseimg/24/24_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 0,
                                "y": 401
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
                            "image": "./image/courseimg/24/24_03.png",
                            "name": "c",
                            "nameNum": 0,
                            "pos": {
                                "x":0,
                                "y":542
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
                "page": 23,
                "content_type": 2,
                "content": "It is four hundred and sixty degrees.",
                "id": 24,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 320,
                        "y": 189
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/25.png",
                    "text": "It is four hundred and sixty degrees.",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //展示页 标题26
            {
                "type": "display",
                "id": 25,
                "state": "01",
                "page": 24,
                "content_type": "",
                "data": {
                    "background_image": "",
                    "overviewImage": "",
                    "pos": {
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/26.png","pos":{"x":(1024/2)-(1024/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //展示页 标题27
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/27.png","pos":{"x":(1024/2)-(1024/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //问卷28
            {
                "type": "survey",
                "page": 26,
                "content_type": "",
                "content": "",
                "id": 27,
                "state": "07",
                "data": {
                    "overviewImage": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/28/28.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/28/28_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 530,
                                "y": 326
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
                            "image": "./image/courseimg/28/28_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 573,
                                "y": 212
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
                "page": 27,
                "content_type": 2,
                "content": "Jupiter is the biggest planet.",
                "id": 28,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 320,
                        "y": 189
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/29.png",
                    "text": "Jupiter is the biggest planet.",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //展示页 标题
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/30.png","pos":{"x":(1024/2)-(1024/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
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
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/31/31.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/31/31_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 0,
                                "y": 259
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
                            "image": "./image/courseimg/31/31_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 0,
                                "y": 401
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
                            "image": "./image/courseimg/31/31_03.png",
                            "name": "c",
                            "nameNum": 0,
                            "pos": {
                                "x":0,
                                "y":542
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
                "content": "Jupiter has sixty seven moons.",
                "id": 31,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 320,
                        "y": 189
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/32.png",
                    "text": "Jupiter has sixty seven moons.",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //问卷
            {
                "type": "survey",
                "page": 31,
                "content_type": "",
                "content": "",
                "id": 32,
                "state": "07",
                "data": {
                    "overviewImage": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/33/33.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/33/33_02.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 678,
                                "y": 356
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
                            "image": "./image/courseimg/33/33_01.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 759,
                                "y": 276
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
                "page": 32,
                "content_type": 2,
                "content": "Neptune is the coldest planet.",
                "id": 33,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 320,
                        "y": 189
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/34.png",
                    "text": "Neptune is the coldest planet.",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //展示页 标题
            {
                "type": "display",
                "id": 34,
                "state": "01",
                "page": 33,
                "content_type": "",
                "data": {
                    "background_image": "",
                    "overviewImage": "",
                    "pos": {
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/35.png","pos":{"x":(1024/2)-(1024/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //问卷
            {
                "type": "survey",
                "page": 34,
                "content_type": "",
                "content": "",
                "id": 35,
                "state": "07",
                "data": {
                    "overviewImage": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/36/36.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/36/36_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 0,
                                "y": 259
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
                            "image": "./image/courseimg/36/36_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 0,
                                "y": 401
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
                            "image": "./image/courseimg/36/36_03.png",
                            "name": "c",
                            "nameNum": 0,
                            "pos": {
                                "x":0,
                                "y":542
                            },
                            "size": {
                                "w": 100,
                                "h": 100
                            }
                        }
                    ]
                }
            },
            //展示页 标题
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/37.png","pos":{"x":(1024/2)-(1024/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
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
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"","pos":{"x":0,"y":219}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //问卷
            {
                "type": "survey",
                "page": 37,
                "content_type": "",
                "content": "",
                "id": 38,
                "state": "07",
                "data": {
                    "overviewImage": "",
                    "pos": {
                        "x": 0,
                        "y": 169
                    },
                    "title": "",
                    "titleImage": "./image/courseimg/39/39.png",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#000000",
                    "body": [
                        {
                            "text": "",
                            "font_size": 68,
                            "fill_color": "#0099ff",
                            "image": "./image/courseimg/39/39_01.png",
                            "name": "a",
                            "nameNum": 0,
                            "pos": {
                                "x": 135,
                                "y": 221
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
                            "image": "./image/courseimg/39/39_02.png",
                            "name": "b",
                            "nameNum": 0,
                            "pos": {
                                "x": 133,
                                "y": 444
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
                "page": 38,
                "content_type": 2,
                "content": "There are no plants in Neptune.",
                "id": 39,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 320,
                        "y": 189
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/40.png",
                    "text": "There are no plants in Neptune.",
                    "text_pos": {
                        "x": (1024/2)-(1024/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //展示
            {
                "type": "display",
                "id": 40,
                "state": "01",
                "page": 39,
                "content_type": "",
                "data": {
                    "background_image": "",
                    "overviewImage": "",
                    "pos": {
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[{"image":"./image/courseimg/41.png","pos":{"x":(1024/2)-(1024/2),"y":90}}],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            },
            //结束视频
            {
                "type": "display",
                "id": 41,
                "state": "01",
                "page": 40,
                "content_type": "",
                "data": {
                    "background_image": "",
                    "overviewImage": "",
                    "pos": {
                        "x":(1024/2)-(522/2),
                        "y": 90
                    },
                    "title": "",
                    "text_pos": {
                        "x": 460,
                        "y": 30
                    },
                    "body":[],
                    "font_size": 68,
                    "fill_color": "#0a152a"
                }
            }
        ]
    };
} else {
    json_data = what;
};
