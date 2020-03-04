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
var BaseCar = (function (_super) {
    __extends(BaseCar, _super);
    function BaseCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timberInterval = [
            _this.timberInterval1, _this.timberInterval1
        ];
        _this.rotations = 10;
        _this.lunArray = [
            _this.lun1, _this.lun2
        ];
        return _this;
    }
    BaseCar.prototype.onAddToStage = function (event) {
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
    // 小车初始化位置
    BaseCar.prototype.appear = function (x, y) {
        this.x = x;
        this.y = y;
    };
    //小车移动
    BaseCar.prototype.fly = function (x, y, speed) {
        egret.Tween.removeTweens(this);
        var tw = egret.Tween.get(this, {});
        tw.to({ x: x, y: y }, speed, egret.Ease.sineOut);
    };
    //轮胎转动
    BaseCar.prototype.startAnimation = function () {
        var _this = this;
        for (var j = 0; j < 2; j++) {
            if (this.timberInterval[j]) {
                clearInterval(this.timberInterval[j]);
            }
            this.lunArray[j].rotation = 360;
            this.timberInterval[j] = setInterval(function () {
                _this.lunArray[0].rotation -= _this.rotations;
                _this.lunArray[1].rotation -= _this.rotations;
            }, .2);
        }
    };
    //加速火苗
    BaseCar.prototype.speedUp = function (i) {
        var that = this;
        this.fire = new egret.Bitmap();
        this.fire.texture = RES.getRes("fire_png");
        this.addChild(this.fire);
        this.fire.y = 30;
        this.fire.x = 202;
        setTimeout(function () {
            if (that.fire) {
                that.removeChild(that.fire);
            }
        }, 1500);
    };
    //初始化小车样式
    BaseCar.prototype.onGroupComplete = function (i) {
        var img = new egret.Bitmap();
        img.texture = RES.getRes('car' + (i + 1) + '_png');
        this.addChild(img);
        for (var j = 0; j < 2; j++) {
            this.lunArray[j] = new egret.Bitmap();
            this.lunArray[j].texture = RES.getRes("lun_png");
            this.addChild(this.lunArray[j]);
            this.lunArray[j].y = img.y + 32;
            this.lunArray[j].anchorOffsetX = this.lunArray[j].width / 2;
            this.lunArray[j].anchorOffsetY = this.lunArray[j].height / 2;
            this.lunArray[j].x = this.lunArray[j].x + this.lunArray[j].anchorOffsetX;
            this.lunArray[j].y = this.lunArray[j].y + this.lunArray[j].anchorOffsetY;
        }
        this.lunArray[0].x = 15 + 29;
        this.lunArray[1].x = 15 + 147;
    };
    return BaseCar;
}(egret.DisplayObjectContainer));
__reflect(BaseCar.prototype, "BaseCar");
//# sourceMappingURL=BaseCar.js.map