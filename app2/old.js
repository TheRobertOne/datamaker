let data = {
    "lesson_title": "I love my dog", //课件标题
    "lesson_points": "什么动物是宠物，以及如何照顾自己的宠物。知道了要爱护小动物。", //课程学习内容
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
                    "x": (1024/2)-(199/2),
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
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "titleImage": "./image/courseimg/3/3.png",
                "text_pos": {
                    "x": (1024/2)-(422/2),
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
                            "x": 694,
                            "y": 183
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
                        "image": "./image/courseimg/3/3-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x":544,
                            "y":388
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
                        "image": "./image/courseimg/3/3-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 794,
                            "y": 400
                        },
                        "size": {
                            "w": 271,
                            "h": 400
                        }
                    }
                ]
            }
        },
        //展示标题
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
                "body":[{"image":"./image/courseimg/4.png","pos":{"x":(1024-536)/2,"y":90}}]
            }
        },
        //空白页
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
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 5,
            "content_type": 0,
            "content": "pet",
            "id": 6,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "",
                "pos": {
                    "x": 555,
                    "y": 173
                },
                "title": "",
                "text_Image":"./image/courseimg/6.png",
                "text": "shoe shop",
                "text_pos": {
                    "x": (1024/2)-(154/2),
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
            "content": "cats",
            "id": 8,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "",
                "pos": {
                    "x": 555,
                    "y": 173
                },
                "title": "",
                "text_Image":"./image/courseimg/8.png",
                "text": "cats",
                "text_pos": {
                    "x": (1024/2)-(154/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //单选
        {
            "type": "choice",
            "page": 8,
            "content_type": "",
            "content": "",
            "id": 9,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/9/9.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(573/2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "pos": {
                    "x":245,
                    "y":531
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/9/9-1.png",
                        "pos": {
                            "x": 588,
                            "y": 206
                        },
                        "size": {
                            "w": 213,
                            "h": 119
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/9/9-2.png",
                        "pos": {
                            "x": 460,
                            "y": 452
                        },
                        "size": {
                            "w": 213,
                            "h": 119
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/9/9-3.png",
                        "pos": {
                            "x": 730,
                            "y": 452
                        },
                        "size": {
                            "w": 213,
                            "h": 119
                        }
                    }
                ],
                "answer": 1
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
        //跟读
        {
            "type": "read",
            "page": 10,
            "content_type": 0,
            "content": "hamsters",
            "id": 11,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "",
                "pos": {
                    "x": 245,
                    "y": 529
                },
                "title": "",
                "text_Image":"./image/courseimg/11.png",
                "text": "hamsters",
                "text_pos": {
                    "x": (1024/2)-(229/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //单选
        {
            "type": "choice",
            "page": 11,
            "content_type": "",
            "content": "",
            "id": 12,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/12/12.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(605/2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "pos": {
                    "x":245,
                    "y":531
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/12/12-1.png",
                        "pos": {
                            "x": 588,
                            "y": 206
                        },
                        "size": {
                            "w": 213,
                            "h": 119
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/12/12-2.png",
                        "pos": {
                            "x": 460,
                            "y": 452
                        },
                        "size": {
                            "w": 213,
                            "h": 119
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/12/12-3.png",
                        "pos": {
                            "x": 730,
                            "y": 452
                        },
                        "size": {
                            "w": 213,
                            "h": 119
                        }
                    }
                ],
                "answer": 0
            }
        },
        //空白页
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
                "body":[{"image":"","pos":{"x":0,"y":0}}]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 13,
            "content_type": 0,
            "content": "dogs",
            "id": 14,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "",
                "pos": {
                    "x": 245,
                    "y": 529
                },
                "title": "",
                "text_Image":"./image/courseimg/14.png",
                "text": "dogs",
                "text_pos": {
                    "x": (1024/2)-(175/2),
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
            "content_type": "",
            "content": "",
            "id": 15,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/15/15.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(573/2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "pos": {
                    "x":245,
                    "y":531
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/15/15-1.png",
                        "pos": {
                            "x": 588,
                            "y": 206
                        },
                        "size": {
                            "w": 213,
                            "h": 119
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/15/15-2.png",
                        "pos": {
                            "x": 460,
                            "y": 452
                        },
                        "size": {
                            "w": 213,
                            "h": 119
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/15/15-3.png",
                        "pos": {
                            "x": 730,
                            "y": 452
                        },
                        "size": {
                            "w": 213,
                            "h": 119
                        }
                    }
                ],
                "answer": 2
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
            "page": 16,
            "content_type": "",
            "content": "",
            "id": 17,
            "state": "07",
            "data": {
                "overviewImage": "",
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "title": "",
                "titleImage": "./image/courseimg/17/17.png",
                "text_pos": {
                    "x": (1024/2)-(697/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#000000",
                "body": [
                    {
                        "text": "",
                        "font_size": 68,
                        "fill_color": "#0099ff",
                        "image": "./image/courseimg/17/17-1.png",
                        "name": "a",
                        "nameNum": 0,
                        "pos": {
                            "x": 588,
                            "y": 206
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
                        "image": "./image/courseimg/17/17-2.png",
                        "name": "b",
                        "nameNum": 0,
                        "pos": {
                            "x":460,
                            "y":452
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
                        "image": "./image/courseimg/17/17-3.png",
                        "name": "c",
                        "nameNum": 0,
                        "pos": {
                            "x": 730,
                            "y": 452
                        },
                        "size": {
                            "w": 271,
                            "h": 400
                        }
                    }
                ]
            }
        },
        //跟读
        {
            "type": "read",
            "page": 17,
            "content_type": 2,
            "content": "I love dogs.",
            "id": 18,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "",
                "pos": {
                    "x": 245,
                    "y": 531
                },
                "title": "",
                "text_Image":"./image/courseimg/18.png",
                "text": "I love dogs.",
                "text_pos": {
                    "x": (1024/2)-(261/2),
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
                "body":[{"image":"./image/courseimg/19/19-1.png","pos":{"x":241,"y":552}},
                    {"image":"./image/courseimg/19/19.png","pos":{"x":(1024-338)/2,"y":90}}]
            }
        },
        //空白页
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
                "body":[{"image":"","pos":{"x":0,"y":0}}]
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
                "body":[{"image":"./image/courseimg/21.png","pos":{"x":161,"y":552}}]
            }
        },
        //单选
        {
            "type": "choice",
            "page": 21,
            "content_type": "",
            "content": "",
            "id": 22,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/22/22.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(367/2),
                    "y": 90
                },
                "background": "",
                "q_image": "./image/courseimg/22/22-4.png",
                "pos": {
                    "x":115,
                    "y":448
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/22/22-1.png",
                        "pos": {
                            "x": 588,
                            "y": 206
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/22/22-2.png",
                        "pos": {
                            "x": 460,
                            "y": 452
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/22/22-3.png",
                        "pos": {
                            "x": 730,
                            "y": 452
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    }
                ],
                "answer": 0
            }
        },
        //跟读
        {
            "type": "read",
            "page": 22,
            "content_type": 2,
            "content": "Feed my dog.",
            "id": 23,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/23/23-1.png",
                "pos": {
                    "x": 161,
                    "y": 552
                },
                "title": "",
                "text_Image":"./image/courseimg/23/23.png",
                "text": "Feed my dog.",
                "text_pos": {
                    "x": (1024/2)-(367/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示页dog
        {
            "type": "display",
            "id": 24,
            "state": "01",
            "page": 23,
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
                "body":[{"image":"./image/courseimg/24.png","pos":{"x":161,"y":552}}]
            }
        },
        //单选
        {
            "type": "choice",
            "page": 24,
            "content_type": "",
            "content": "",
            "id": 25,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/25/25.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(367/2),
                    "y": 90
                },
                "background": "",
                "q_image": "./image/courseimg/25/25-4.png",
                "pos": {
                    "x":115,
                    "y":448
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/25/25-1.png",
                        "pos": {
                            "x": 588,
                            "y": 206
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/25/25-2.png",
                        "pos": {
                            "x": 460,
                            "y": 452
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/25/25-3.png",
                        "pos": {
                            "x": 730,
                            "y": 452
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    }
                ],
                "answer": 1
            }
        },
        //跟读
        {
            "type": "read",
            "page": 25,
            "content_type": 2,
            "content": "Play with my dog.",
            "id": 26,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/26/26-1.png",
                "pos": {
                    "x": 161,
                    "y": 552
                },
                "title": "",
                "text_Image":"./image/courseimg/26/26.png",
                "text": "Play with my dog.",
                "text_pos": {
                    "x": (1024/2)-(393/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //展示页dog
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
                "body":[{"image":"./image/courseimg/27.png","pos":{"x":161,"y":552}}]
            }
        },
        //单选
        {
            "type": "choice",
            "page": 27,
            "content_type": "",
            "content": "",
            "id": 28,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/28/28.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(367/2),
                    "y": 90
                },
                "background": "",
                "q_image": "./image/courseimg/28/28-4.png",
                "pos": {
                    "x":115,
                    "y":448
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/25/25-1.png",
                        "pos": {
                            "x": 588,
                            "y": 206
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/25/25-2.png",
                        "pos": {
                            "x": 460,
                            "y": 452
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/25/25-3.png",
                        "pos": {
                            "x": 730,
                            "y": 452
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    }
                ],
                "answer": 2
            }
        },
        //跟读
        {
            "type": "read",
            "page": 28,
            "content_type": 2,
            "content": "Walk my dog.",
            "id": 29,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "",
                "pos": {
                    "x": 161,
                    "y": 552
                },
                "title": "",
                "text_Image":"./image/courseimg/29.png",
                "text": "Walk my dog.",
                "text_pos": {
                    "x": (1024/2)-(332/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //空白页
        {
            "type": "display",
            "id": 30,
            "state": "01",
            "page": 29,
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
        //展示页dog
        {
            "type": "display",
            "id": 31,
            "state": "01",
            "page": 30,
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
                "body":[{"image":"./image/courseimg/31.png","pos":{"x":161,"y":552}}]
            }
        },
        //单选
        {
            "type": "choice",
            "page": 31,
            "content_type": "",
            "content": "",
            "id": 32,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/32/32.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024/2)-(367/2),
                    "y": 90
                },
                "background": "",
                "q_image": "./image/courseimg/32/32-4.png",
                "pos": {
                    "x":161,
                    "y":552
                },
                "qAdimation": "",
                "animation": "",
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/32/32-1.png",
                        "pos": {
                            "x": 588,
                            "y": 206
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/32/32-2.png",
                        "pos": {
                            "x": 460,
                            "y": 452
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    },{
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/32/32-3.png",
                        "pos": {
                            "x": 730,
                            "y": 452
                        },
                        "size": {
                            "w": 249,
                            "h": 63
                        }
                    }
                ],
                "answer": 0
            }
        },
        //空白页
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
        //跟读
        {
            "type": "read",
            "page": 33,
            "content_type": 2,
            "content": "Wash my dog.",
            "id": 34,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "",
                "pos": {
                    "x": 161,
                    "y": 552
                },
                "title": "",
                "text_Image":"./image/courseimg/34.png",
                "text": "Wash my dog.",
                "text_pos": {
                    "x": (1024/2)-(393/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //空白页
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
        //跟读
        {
            "type": "read",
            "page": 35,
            "content_type": 2,
            "content": "I love my dog.",
            "id": 36,
            "state": "02",
            "overviewImage": "",
            "pos": {
                "x": 18,
                "y": 458
            },
            "data": {
                "image": "./image/courseimg/36/36-1.png",
                "pos": {
                    "x": 161,
                    "y": 552
                },
                "title": "",
                "text_Image":"./image/courseimg/36/36.png",
                "text": "I love my dog.",
                "text_pos": {
                    "x": (1024/2)-(393/2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        //跟读开放111
        {
            "type":"read",
            "page":36,
            "content_type":1,
            "content":"",
            "id":37,
            "state":"111",
            "data":{
                "image": "./image/courseimg/37/37-1.png",
                "overviewImage":"./image/courseimg/37/37.png",
                "overviewImage_pos":{
                    "x": (1024/2)-(451/2),
                    "y": 90
                },
                "pos": {
                    "x": 161,
                    "y": 552
                },
                "title":"",
                "text": "",
                "text_pos":{
                    "x": 460,
                    "y": 30
                },
                "font_size":68,
                "fill_color":"#0099ff"
            }
        },
        //空白页
        {
            "type": "display",
            "id": 38,
            "state": "01",
            "page": 37,
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
        //bey
        {
            "type": "display",
            "id": 39,
            "state": "01",
            "page": 38,
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
                "body":[{"image":"./image/courseimg/39/39.png","pos":{"x":(1024-165)/2,"y":90}},
                    {"image":"./image/courseimg/39/39-1.png","pos":{"x":161,"y":552}}]
            }
        },
        //空白页
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

module.exports = data;