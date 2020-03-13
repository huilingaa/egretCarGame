var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var gameOther = (function (_super) {
    __extends(gameOther, _super);
    function gameOther() {
        var _this = _super.call(this) || this;
        _this.switchOpen = true;
        _this.control = true;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    gameOther.prototype.onAddToStage = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var sound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._sound = new egret.Sound();
                        sound = ["resource/assets/com/sound/bullet.mp3"];
                        this._sound.load("resource/assets/com/sound/bullet.mp3");
                        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.toggleMusic, this);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    gameOther.prototype.play = function () {
        this._channel = this._sound.play();
    };
    gameOther.prototype.stop = function () {
        if (this._channel) {
            this._channel.stop();
            this._channel = null;
        }
    };
    // 文字
    gameOther.prototype.onFont = function (font1, font2, state) {
        var _this = this;
        var arrBom = [{
                x: 174, x2: 652, y: 66, font: '期号 20200221172'
            }, {
                x: 738, x2: 718, y: 66, font: '下期时间 13：49'
            }, {
                x: 55, y: 937, font: '期号'
            }, {
                x: 180, y: 937, font: '20200221159'
            }, {
                x: 60, y: 984, font: '2020-02-21'
            }, {
                x: 220, y: 984, font: '16:09'
            },
            {
                x: 493, y: 937, font: '冠亚军和'
            },
            {
                x: 411, y: 984, font: '12'
            },
            {
                x: 521, y: 984, font: '大'
            }, {
                x: 648, y: 984, font: '双'
            },
            {
                x: 834, y: 937, font: '1-5龙虎'
            },
            {
                x: 706 + 60, y: 984, font: '龙'
            },
            {
                x: 706 + 60 * 2, y: 984, font: '龙'
            }, {
                x: 706 + 60 * 3, y: 984, font: '虎'
            }, {
                x: 706 + 60 * 4, y: 984, font: '龙'
            }, {
                x: 706 + 60 * 5, y: 984, font: '虎'
            },
        ];
        var arrayX = [200, 712];
        var font = [];
        arrBom.forEach(function (item, index) {
            font[index] = new egret.TextField();
            _this.addChild(font[index]);
            if (state !== 'playIng' || index < 2) {
                font[index].x = state == 'playIng' ? arrayX[index] : item.x;
                font[index].y = state == 'playIng' ? 36 : item.y;
                font[index].text = item.font;
            }
            font[index].size = 22;
            font[index].textColor = 0xffffff;
        });
    };
    // 音乐样式与播放
    gameOther.prototype.toggleMusic = function (state) {
        var _this = this;
        var that = this;
        Global.painting(this, new egret.Bitmap(RES.getRes("calendar_png")), { x: 20, y: 53 });
        this.rightSound = new eui.Image(RES.getRes('musicClose_png'));
        Global.painting(this, this.rightSound, { x: 1014, y: 53 });
        this.rightSound.touchEnabled = true;
        this.rightSound.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.switchOpen = !_this.switchOpen;
            if (_this.switchOpen) {
                _this.stop();
            }
            else {
                _this.play();
            }
            _this.rightSound.source = _this.switchOpen ? RES.getRes('musicClose_png') : RES.getRes('shengyin_png');
        }, this);
    };
    return gameOther;
}(egret.DisplayObjectContainer));
__reflect(gameOther.prototype, "gameOther");
//# sourceMappingURL=comFrame.js.map