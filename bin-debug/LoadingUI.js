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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        Global.painting(this, new egret.Bitmap(RES.getRes("loadBg_png")), { x: 0, y: 0 });
        Global.written(this, new egret.TextField(), { x: 576, y: 900, textColor: 0x00A5FF, text: '加载中', size: 20 });
        this.textField = new egret.TextField();
        Global.written(this, this.textField, { x: 908, y: 922, textColor: 0x00A5FF, text: '', size: 20 });
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var text = (current / total) * 100;
        var t = parseInt(text.toString()) + 2;
        this.textField.text = "" + t + '%';
        var temp = t / 100 * 16;
        for (var i = 0; i <= temp; i++) {
            Global.painting(this, new egret.Bitmap(RES.getRes("loading_png")), { x: 332 + 32 * i, y: 930 });
        }
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
