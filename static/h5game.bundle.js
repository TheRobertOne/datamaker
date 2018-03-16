/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/h5game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/game/init.js":
/*!*****************************!*\
  !*** ./static/game/init.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'direct');\n\nvar back;\nvar mummy;\nvar anim;\nvar loopText;\n\ngame.state.add('boot', function () {\n    this.preload = function () {\n\n        game.load.image('lazur', './images/thorn_lazur.png');\n        game.load.spritesheet('mummy', './images/metalslug_mummy37x45.png', 37, 45, 18);\n    };\n\n    this.create = function () {\n\n        back = game.add.image(0, -400, 'lazur');\n        back.scale.set(2);\n        back.smoothed = false;\n\n        mummy = game.add.sprite(200, 360, 'mummy', 5);\n        mummy.scale.set(4);\n        mummy.smoothed = false;\n        anim = mummy.animations.add('run');\n        mummy.inputEnabled = true;\n        mummy.input.enableDrag();\n        var dd = game.add.text(100, 200, '胖胖胖', { fill: 'blue' });\n        dd.inputEnabled = true;\n        dd.input.enableDrag();\n\n        anim.onStart.add(animationStarted);\n        anim.onLoop.add(animationLooped);\n        anim.onComplete.add(animationStopped);\n\n        anim.play(10, true);\n\n        mummy.events.onDragStop.add(function (x, y) {\n            // var m = game.physics.arcade.intersects(mummy, dd);\n            // if (m) {\n            //     console.log(dd.position)\n            //     game.add.tween(mummy).to(dd.position, 500, null, true, 0, 0).onComplete.add(function () {\n            //         console.log(\"移动完成\")\n            //         // mummy.input.disableDrag();//开启拖拽\n\n            //     });\n            // }\n\n        });\n        mummy.events.onDragUpdate.add(function () {\n            var m = game.physics.arcade.intersects(mummy, dd);\n            if (m) {\n                console.log(dd.position);\n                game.add.tween(mummy).to({ x: 800, y: 500 }, 500, null, true, 0, 0).onComplete.add(function () {\n                    console.log(\"移动完成\");\n                    // mummy.input.disableDrag();//开启拖拽\n\n                });\n            }\n        });\n\n        dd.events.onDragStop.add(function (x, y) {\n            var m = game.physics.arcade.intersects(mummy, dd);\n\n            if (m) {\n                console.log('dd');\n            }\n        });\n    };\n    this.update = function () {\n\n        if (anim.isPlaying) {\n            back.x -= 1;\n        }\n    };\n});\n\nfunction animationStarted(sprite, animation) {\n\n    var text = game.add.text(32, 100, 'Animation started', { fill: 'white' });\n    text.inputEnabled = true;\n    text.input.enableDrag();\n}\n\nfunction animationLooped(sprite, animation) {\n\n    if (animation.loopCount === 1) {\n        loopText = game.add.text(32, 64, 'Animation looped', { fill: 'white' });\n        loopText.inputEnabled = true;\n        loopText.events.onInputDown.add(function (a, b, c, d) {\n            console.log(a);\n            a.text = '第几了';\n            console.log(b);\n            console.log(c);\n            console.log(d);\n        });\n    } else {\n        loopText.text = 'Animation looped x2gg';\n        // animation.loop = false;\n    }\n}\n\nfunction animationStopped(sprite, animation) {}\n\nmodule.exports = game;\n\n//# sourceURL=webpack:///./static/game/init.js?");

/***/ }),

/***/ "./static/h5game.js":
/*!**************************!*\
  !*** ./static/h5game.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar game = __webpack_require__(/*! ./game/init */ \"./static/game/init.js\");\n\ngame.state.start('boot');\n\n//# sourceURL=webpack:///./static/h5game.js?");

/***/ })

/******/ });