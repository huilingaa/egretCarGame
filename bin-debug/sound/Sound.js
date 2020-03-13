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
var sound = (function (_super) {
    __extends(sound, _super);
    function sound() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    sound.prototype.onAddToStage = function (event) {
        this.loadSound();
    };
    sound.prototype.loadSound = function () {
        var sound = this._sound = new egret.Sound();
        ;
        sound.addEventListener(egret.Event.COMPLETE, function (e) {
            this.init();
        }, this);
        sound.load("resource/assets/com/sound/StarWar.mp3");
    };
    sound.prototype.play = function () {
        this._channel = this._sound.play();
    };
    sound.prototype.stop = function () {
        if (this._channel) {
            this._channel.stop();
            this._channel = null;
        }
    };
    return sound;
}(eui.Component));
__reflect(sound.prototype, "sound", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Sound.js.map