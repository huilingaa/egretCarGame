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
var GameStartScene = (function (_super) {
    __extends(GameStartScene, _super);
    function GameStartScene() {
        var _this = _super.call(this) || this;
        _this.btnName = [];
        _this.startCar = [];
        return _this;
    }
    GameStartScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    //实例化场景和动画加载
    GameStartScene.prototype.init = function () {
        this.gameOther = new gameOther();
        this.gameOther.onFont('20200221173', '11:45', 'playStart');
        this.addChild(this.gameOther);
        this.toggleMusic();
        for (var i = 0; i < 10; i++) {
            this.btnName[i] = new btnSort((i + 1) + '_png');
            this.btnName[i].appear(102.9 * i + 79, 194);
            this.btnName[i].setScale(1.2);
            this.addChild(this.btnName[i]);
            this.startCar[i] = new btnSort('sCar' + (i + 1) + '_png');
            this.startCar[i].appear(108 * i + 52, 772);
            this.addChild(this.startCar[i]);
        }
    };
    GameStartScene.prototype.toggleMusic = function () {
        var leftTime = new egret.Bitmap();
        this.addChild(leftTime);
        leftTime.y = 222;
        leftTime.x = 297;
        leftTime.texture = RES.getRes("lamp0_png");
        this.countDown = new egret.TextField();
        this.addChild(this.countDown);
        this.countDown.fontFamily = 'Arial Black';
        this.countDown.x = 497;
        this.countDown.y = 523;
        this.countDown.size = 124;
        var count = 3;
        var countLight = 0;
        var that = this;
        that.countDown.text = count.toString();
        var countDown = setInterval(function () {
            if (count > 0) {
                count--;
                countLight++;
                leftTime.texture = RES.getRes("lamp" + countLight + "_png");
                that.countDown.text = count.toString();
            }
            else {
                Global.replaceScene(new GameScene());
                clearInterval(countDown);
            }
        }, 1000);
    };
    return GameStartScene;
}(eui.Component));
__reflect(GameStartScene.prototype, "GameStartScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameStartScene.js.map