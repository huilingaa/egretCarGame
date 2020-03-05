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
    // 项目公用方法
    function GameStartScene() {
        var _this = _super.call(this) || this;
        _this.btnName = [
            _this.btn1, _this.btn2, _this.btn3,
            _this.btn4, _this.btn5, _this.btn6,
            _this.btn7, _this.btn8, _this.btn9, _this.btn10
        ];
        _this.startCar = [
            _this.startCarA, _this.startCarB, _this.startCarC,
            _this.startCarD, _this.startCarE, _this.startCarF,
            _this.startCarG, _this.startCarH, _this.startCarI, _this.startCarJ
        ];
        _this.toggleMusic();
        return _this;
        // //创建一个计时器对象
        // var timer: egret.Timer = new egret.Timer(1000, 3);
        // //注册事件侦听器
        // timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        // //开始计时
        // timer.start();
    }
    GameStartScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.setListeners();
    };
    GameStartScene.prototype.setListeners = function () {
        // this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
        // this.timeOnEnterFrame = egret.getTimer();
    };
    //实例化场景和动画加载
    GameStartScene.prototype.init = function () {
        this.gameOther = new gameOther();
        this.gameOther.onFont('20200221173', '11:45', 1);
        this.addChild(this.gameOther);
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
        // 图片
        var leftTime = new egret.Bitmap();
        this.addChild(leftTime);
        leftTime.y = 222;
        leftTime.x = 297;
        var that = this;
        this.countDown = new egret.TextField();
        this.addChild(this.countDown);
        this.countDown.fontFamily = 'Arial Black';
        this.countDown.x = 497;
        this.countDown.y = 523;
        this.countDown.size = 124;
        var count = 3;
        var countLight = 0;
        leftTime.texture = RES.getRes("lamp0_png");
        that.countDown.text = count.toString();
        var countDown = setInterval(function () {
            if (count > 0) {
                count--;
                countLight++;
                leftTime.texture = RES.getRes("lamp" + countLight + "_png");
                that.countDown.text = count.toString();
            }
            else {
                clearInterval(countDown);
            }
        }, 1000);
    };
    return GameStartScene;
}(eui.Component));
__reflect(GameStartScene.prototype, "GameStartScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameStartScene.js.map