const fs = require('fs');
var obj = {
    "lesson_title": "hair", //课件标题
    "lesson_points": "认知头发这个单词，并能分辨出头发的模样，可以学会表达喜欢还是不喜欢，正确表达出自己的想法.", //课程学习内容
    "courseware": [
        {
            "type": "display",
            "id": 1,
            "state": "01",
            "page": 0,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": (1024 / 2) - (530 / 2),
                    "y": 90
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
                "text_Image": "./image/courseimg/2/2.png",
                "text": "Hello",
                "text_pos": {
                    "x": (1024 / 2) - (176 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        {
            "type": "choice",
            "page": 2,
            "content_type": "",
            "content": "",
            "id": 3,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/3/3.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024 / 2) - (455 / 2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "qAdimation": "rotate",
                "animation": "",
                "pos": {
                    "x": 0,
                    "y": 171
                },
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/3/3-1.png",
                        "pos": {
                            "x": 32,
                            "y": 202
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/3/3-2.png",
                        "pos": {
                            "x": 32,
                            "y": 451
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    }
                ],
                "answer": 0
            }
        },
        {
            "type": "read",
            "page": 3,
            "content_type": 0,
            "content": "Hair",
            "id": 4,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/4/4.png",
                "text": "Hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        {
            "type": "read",
            "page": 4,
            "content_type": 0,
            "content": "hair",
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
                "text_Image": "./image/courseimg/5/5.png",
                "text": "hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
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
                    "x": (1024 / 2) - (530 / 2),
                    "y": 90
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
        {
            "type": "choice",
            "page": 6,
            "content_type": "",
            "content": "",
            "id": 7,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/7/7.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024 / 2) - (455 / 2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "qAdimation": "rotate",
                "animation": "",
                "pos": {
                    "x": 0,
                    "y": 171
                },
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/7/7-1.png",
                        "pos": {
                            "x": 32,
                            "y": 202
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/7/7-2.png",
                        "pos": {
                            "x": 32,
                            "y": 451
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    }
                ],
                "answer": 0
            }
        },
        {
            "type": "display",
            "id": 8,
            "state": "01",
            "page": 7,
            "content_type": "",
            "data": {
                "background_image": "",
                "overviewImage": "",
                "pos": {
                    "x": (1024 / 2) - (530 / 2),
                    "y": 90
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
        {
            "type": "read",
            "page": 8,
            "content_type": 0,
            "content": "Hair",
            "id": 9,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/9/9.png",
                "text": "Hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
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
                    "x": (1024 / 2) - (530 / 2),
                    "y": 90
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
        {
            "type": "choice",
            "page": 10,
            "content_type": "",
            "content": "",
            "id": 11,
            "state": "04",
            "data": {
                "title": "",
                "titleImage": "./image/courseimg/11/11.png",
                "text": "",
                "font_size": 42,
                "fill_color": "#0a152a",
                "text_pos": {
                    "x": (1024 / 2) - (455 / 2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "qAdimation": "rotate",
                "animation": "",
                "pos": {
                    "x": 0,
                    "y": 171
                },
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/11/11-1.png",
                        "pos": {
                            "x": 32,
                            "y": 202
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/11/11-2.png",
                        "pos": {
                            "x": 32,
                            "y": 451
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    }
                ],
                "answer": 0
            }
        },
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
                    "x": (1024 / 2) - (530 / 2),
                    "y": 90
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
        {
            "type": "read",
            "page": 12,
            "content_type": 0,
            "content": "hair",
            "id": 13,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/13/13.png",
                "text": "hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
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
                    "x": (1024 / 2) - (530 / 2),
                    "y": 90
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
                    "x": (1024 / 2) - (455 / 2),
                    "y": 90
                },
                "background": "",
                "q_image": "",
                "qAdimation": "rotate",
                "animation": "",
                "pos": {
                    "x": 0,
                    "y": 171
                },
                "body": [
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/15/15-1.png",
                        "pos": {
                            "x": 32,
                            "y": 202
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    },
                    {
                        "text": "",
                        "voice": "",
                        "allow": true,
                        "image": "./image/courseimg/15/15-2.png",
                        "pos": {
                            "x": 32,
                            "y": 451
                        },
                        "size": {
                            "w": 260,
                            "h": 224
                        }
                    }
                ],
                "answer": 1
            }
        },
        {
            "type": "read",
            "page": 15,
            "content_type": 0,
            "content": "hair",
            "id": 16,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/16/16.png",
                "text": "hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        {
            "type": "read",
            "page": 16,
            "content_type": 0,
            "content": "hair",
            "id": 17,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/16/16.png",
                "text": "hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
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
                    "x": (1024 / 2) - (530 / 2),
                    "y": 90
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
        {
            "type": "read",
            "page": 18,
            "content_type": 0,
            "content": "Hair",
            "id": 19,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/16/16.png",
                "text": "Hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        {
            "type": "read",
            "page": 19,
            "content_type": 0,
            "content": "Hair",
            "id": 20,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/16/16.png",
                "text": "Hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        {
            "type": "jigsaw",
            "id": 21,
            "state": "09",
            "page": 20,
            "content_type": "",
            "data": {
                "title_img": "./image/courseimg/21/21.png",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "item": [
                    {
                        "image": "./image/courseimg/21/21-3.png",
                        "pos": { "x": 33, "y": 160 }
                    }
                ],
                "groupA": [
                    {
                        "image": "./image/courseimg/21/21-2.png",
                        "pos": {
                            "x": 75,
                            "y": 425
                        },
                        "answer": 0
                    }
                ],
                "groupB": [
                    {
                        "image": "./image/courseimg/21/21-1.png",
                        "pos": {
                            "x": 75,
                            "y": 176
                        }
                    }
                ]
            }
        },
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
                    "x": (1024 / 2) - (530 / 2),
                    "y": 90
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
        {
            "type": "read",
            "page": 22,
            "content_type": 0,
            "content": "Hair",
            "id": 23,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/21/21.png",
                "text": "Hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        {
            "type": "read",
            "page": 23,
            "content_type": 0,
            "content": "Hair",
            "id": 24,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/21/21.png",
                "text": "Hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        {
            "type": "read",
            "page": 24,
            "content_type": 0,
            "content": "Hair",
            "id": 25,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/21/21.png",
                "text": "Hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
        {
            "type": "read",
            "page": 25,
            "content_type": 0,
            "content": "Hair",
            "id": 26,
            "state": "02",
            "overviewImage": "",
            "data": {
                "image": "",
                "pos": {
                    "x": 0,
                    "y": 169
                },
                "title": "",
                "text_Image": "./image/courseimg/21/21.png",
                "text": "Hair",
                "text_pos": {
                    "x": (1024 / 2) - (155 / 2),
                    "y": 90
                },
                "font_size": 68,
                "fill_color": "#0099ff"
            }
        },
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
                    "x": (1024 / 2) - (530 / 2),
                    "y": 90
                },
                "title": "",
                "text_pos": {
                    "x": 460,
                    "y": 30
                },
                "font_size": 68,
                "fill_color": "#0a152a"
            }
        }
    ]
}

fs.writeFile('./my.json',JSON.stringify(obj),()=>{})