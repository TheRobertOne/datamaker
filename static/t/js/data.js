/**
 * Created by klaus on 16/10/13.
 * 获取 IBL 直播课 预览数据
 */
var qdata = {
        "lesson_title": "Magic word egg", //课件标题
        "lesson_points": "单词鸡蛋", //课程学习内容
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
                        "x": (1024/2)-(192/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //空白页
            {
                "type": "display",
                "id": 3,
                "state": "01",
                "page": 2,
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
                "page": 3,
                "content_type": 0,
                "content": "egg",
                "id": 4,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 0,
                        "y": 0
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/4.png",
                    "text": "egg",
                    "text_pos": {
                        "x": (1024/2)-(175/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
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
            //单选
            {
                "type": "choice",
                "page": 5,
                "content_type": "",
                "content": "",
                "id": 6,
                "state": "04",
                "data": {
                    "title": "",
                    "titleImage": "./image/courseimg/6/6.png",
                    "text": "",
                    "font_size": 42,
                    "fill_color": "#0a152a",
                    "text_pos": {
                        "x": (1024/2)-(486/2),
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
                            "image": "./image/courseimg/6/6_01.png",
                            "pos": {
                                "x": 29,
                                "y": 204
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
                            "image": "./image/courseimg/6/6_02.png",
                            "pos": {
                                "x": 29,
                                "y": 453
                            },
                            "size": {
                                "w": 104,
                                "h": 104
                            }
                        }
                    ],
                    "answer": 0
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
                "content": "egg",
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
                    "text_Image":"./image/courseimg/9.png",
                    "text": "egg",
                    "text_pos": {
                        "x": (1024/2)-(175/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //空白页
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
                    "body":[{"image":"","pos":{"x":0,"y":0}}]
                }
            },
            //拼图题ok
            {
                "type": "jigsaw", //资源
                "id": 10,
                "state": "09",//题型
                "page": 9,
                "content_type": "",
                "data":{
                    "title_img":"./image/courseimg/8/8.png",
                    "text_pos": {
                        "x": (1024/2)-(175/2),
                        "y": 90
                    },
                    "item":[{
                        "image": "./image/courseimg/8/8_01.png",
                        "pos":{"x":0,"y":205}
                    }],//所有展示数据 无就空
                    "groupA":[
                        {
                            "image": "./image/courseimg/8/8_03.png",
                            "pos":{"x":158,"y":243},
                            "answer":0
                        }

                    ], //所有选项框
                    "groupB":[
                        {
                            "image": "./image/courseimg/8/8_02.png",
                            "pos":{"x":158,"y":415}
                        }
                    ],
                }

            },
            //空白页
            {
                "type": "display",
                "id": 11,
                "state": "01",
                "page": 10,
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
                "page": 11,
                "content_type": 0,
                "content": "egg",
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
                    "text_Image":"./image/courseimg/11.png",
                    "text": "egg",
                    "text_pos": {
                        "x": (1024/2)-(175/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
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



            //单选
            {
                "type": "choice",
                "page": 13,
                "content_type": "",
                "content": "",
                "id": 14,
                "state": "04",
                "data": {
                    "title": "",
                    "titleImage": "./image/courseimg/12/12.png",
                    "text": "",
                    "font_size": 42,
                    "fill_color": "#0a152a",
                    "text_pos": {
                        "x": (1024/2)-(477/2),
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
                            "image": "./image/courseimg/12/12_01.png",
                            "pos": {
                                "x": 29,
                                "y": 204
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
                            "image": "./image/courseimg/12/12_02.png",
                            "pos": {
                                "x": 29,
                                "y": 453
                            },
                            "size": {
                                "w": 104,
                                "h": 104
                            }
                        }
                    ],
                    "answer": 0
                }
            },
            //空白页
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
                "page": 15,
                "content_type": 0,
                "content": "egg",
                "id": 16,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "",
                    "pos": {
                        "x": 0,
                        "y": 0
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/14.png",
                    "text": "egg",
                    "text_pos": {
                        "x": (1024/2)-(175/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },
            //空白页
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
                    "body":[{"image":"","pos":{"x":0,"y":0}}]
                }
            },
            //单选
            {
                "type": "choice",
                "page": 17,
                "content_type": "",
                "content": "",
                "id": 18,
                "state": "04",
                "data": {
                    "title": "",
                    "titleImage": "./image/courseimg/16/16.png",
                    "text": "",
                    "font_size": 42,
                    "fill_color": "#0a152a",
                    "text_pos": {
                        "x": (1024/2)-(486/2),
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
                            "image": "./image/courseimg/16/16_01.png",
                            "pos": {
                                "x": 29,
                                "y": 204
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
                            "image": "./image/courseimg/16/16_02.png",
                            "pos": {
                                "x": 29,
                                "y": 453
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
                "page": 19,
                "content_type": 0,
                "content": "egg",
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
                    "text_Image":"./image/courseimg/18.png",
                    "text": "egg",
                    "text_pos": {
                        "x": (1024/2)-(175/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },

            //空白页
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
                    "body":[{"image":"","pos":{"x":0,"y":0}}]
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
                    "titleImage": "./image/courseimg/19/19.png",
                    "text": "",
                    "font_size": 42,
                    "fill_color": "#0a152a",
                    "text_pos": {
                        "x": (1024/2)-(486/2),
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
                            "image": "./image/courseimg/19/19_01.png",
                            "pos": {
                                "x": 29,
                                "y": 204
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
                            "image": "./image/courseimg/19/19_02.png",
                            "pos": {
                                "x": 29,
                                "y": 453
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

            //空白页
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
                    "body":[{"image":"./image/courseimg/25_02.png","pos":{"x":515,"y":676}}]
                }
            },


            //拼图题ok
            {
                "type": "jigsaw", //资源
                "id": 25,
                "state": "09",//题型
                "page": 24,
                "content_type": "",
                "data":{
                    "title_img":"./image/courseimg/21/21.png",
                    "text_pos": {
                        "x": (1024/2)-(175/2),
                        "y": 90
                    },
                    "item":[{
                        "image": "",
                        "pos":{"x":0,"y":205}
                    }],//所有展示数据 无就空
                    "groupA":[
                        {
                            "image": "./image/courseimg/25_01.png",
                            "pos":{"x":310,"y":676},
                            "answer":0
                        }

                    ], //所有选项框
                    "groupB":[
                        {
                            "image": "./image/courseimg/25_02.png",
                            "pos":{"x":515,"y":676}
                        }
                    ],
                }

            },


            //空白页
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
                    "body":[{"image":"./image/courseimg/25_02.png","pos":{"x":310,"y":676}}]
                }
            },


            //跟读
            {
                "type": "read",
                "page": 26,
                "content_type": 0,
                "content": "egg",
                "id": 27,
                "state": "02",
                "overviewImage": "",
                "data": {
                    "image": "./image/courseimg/25_02.png",
                    "pos": {
                        "x": 310,
                        "y": 676
                    },
                    "title": "",
                    "text_Image":"./image/courseimg/22.png",
                    "text": "egg",
                    "text_pos": {
                        "x": (1024/2)-(175/2),
                        "y": 90
                    },
                    "font_size": 68,
                    "fill_color": "#0099ff"
                }
            },

            //bey
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
                    "body":[{"image":"./image/courseimg/23.png","pos":{"x":(1024/2)-(236/2),"y":90}},
                        {"image":"./image/courseimg/25_02.png","pos":{"x":310,"y":676}}]
                }
            },
            //空白页
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
                    "body":[{"image":"","pos":{"x":0,"y":0}}]
                }
            }
        ]
    };

