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
        _this.onGroupComplete();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    gameOther.prototype.onAddToStage = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
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
    // 文字
    gameOther.prototype.onFont = function (font1, font2) {
        var label1 = new egret.TextField();
        var label2 = new egret.TextField();
        var fontArray = [label1, label2];
        for (var i in [0, 1]) {
            this.addChild(fontArray[i]);
            fontArray[i].y = 20;
            fontArray[0].x = 147;
            fontArray[1].x = 652;
            fontArray[i].width = 281;
            fontArray[i].height = 52;
            fontArray[i].size = 22;
            fontArray[i].textAlign = egret.HorizontalAlign.CENTER;
            fontArray[i].verticalAlign = egret.VerticalAlign.MIDDLE;
            fontArray[i].textColor = 0xffffff;
            fontArray[0].text = "下期时间:" + font1;
            fontArray[1].text = "期号:" + font2;
        }
    };
    // 音乐样式与音乐
    gameOther.prototype.onGroupComplete = function () {
        var leftTime = new egret.Bitmap();
        leftTime.texture = RES.getRes("calendar_png");
        this.addChild(leftTime);
        leftTime.y = 53;
        leftTime.x = 20;
        this.onSound(RES.getRes("shengyin_png"));
    };
    gameOther.prototype.onSound = function (instance) {
        this.rightSound = new egret.Bitmap();
        this.rightSound.texture = instance;
        this.addChild(this.rightSound);
        this.rightSound.y = 53;
        this.rightSound.x = 1050 - this.rightSound.width;
        this.rightSound.touchEnabled = true;
        this.rightSound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    };
    gameOther.prototype.onTouch = function (instance) {
        if (this.switchOpen) {
            this.removeChild(this.rightSound);
        }
        else {
            this.addChild(this.rightSound);
        }
        this.switchOpen = !this.switchOpen;
    };
    return gameOther;
}(egret.DisplayObjectContainer));
__reflect(gameOther.prototype, "gameOther");
//# sourceMappingURL=gameOther.js.map