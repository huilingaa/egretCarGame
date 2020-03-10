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
        // this.onProgress();
    }
    LoadingUI.prototype.createView = function () {
        var bg = new egret.Bitmap(RES.getRes("loadBg_png"));
        this.addChild(bg);
        bg.x = 0;
        bg.y = 0;
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 900;
        this.textField.x = 576;
        this.textField.textColor = 0x00A5FF;
        this.textField.text = "\u52A0\u8F7D\u4E2D";
        this.textField.size = 20;
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 922;
        this.textField.x = 908;
        this.textField.textColor = 0x00A5FF;
        this.textField.size = 20;
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var text = (current / total) * 100;
        var t = parseInt(text.toString());
        this.textField.text = "" + t + '%';
        var temp = t / 100 * 16;
        for (var i = 0; i <= temp; i++) {
            var box = new egret.Bitmap(RES.getRes("loading_png"));
            this.addChild(box);
            box.x = 332 + 32 * i;
            box.y = 930;
        }
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map