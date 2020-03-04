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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    // 项目公用方法
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.bgSpeed = 1.4; //越大越快
        _this.btnName = [
            _this.btn1, _this.btn2, _this.btn3,
            _this.btn4, _this.btn5, _this.btn6,
            _this.btn7, _this.btn8, _this.btn9, _this.btn10
        ];
        _this.carName = [
            _this.BaseCarA, _this.BaseCarB, _this.BaseCarC,
            _this.BaseCarD, _this.BaseCarE, _this.BaseCarF,
            _this.BaseCarG, _this.BaseCarH, _this.BaseCarI, _this.BaseCarJ
        ];
        _this.timeInterval = 1 / 60 * 1000;
        _this.timeOnEnterFrame = 0; //记录上一帧的时间
        _this.lockTime = 100;
        _this.count = -1;
        _this.setIntervalcount = 0;
        _this.countTemp = 0;
        return _this;
    }
    GameScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.setListeners();
    };
    GameScene.prototype.setListeners = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    };
    //实例化场景和动画加载
    GameScene.prototype.init = function () {
        this.gameOther = new gameOther();
        this.gameOther.onFont('20200221173', '11:45');
        this.addChild(this.gameOther);
        this.tool = new tool();
        var outSide = this.tool.gitData();
        this.array = outSide.returna;
        this.arrayBtn = outSide.returnb;
        this.arraySelect = outSide.returnc;
        console.log(this.arraySelect);
        //  console.log(this.array);
        //  console.log(this.arrayBtn);
        var distanceX = [144, 131, 119, 108, 96, 84, 78, 62, 50, 38];
        for (var i = 0; i < 10; i++) {
            this.carName[i] = new BaseCar();
            this.carName[i].appear(878 - distanceX[i], 214 + 56 + 64 * (9 - i));
            this.carName[i].onGroupComplete((i));
            this.addChild(this.carName[i]);
            this.btnName[i] = new btnSort((i + 1) + '_png');
            this.btnName[i].appear(83.7 * i + 164, 106);
            this.addChild(this.btnName[i]);
        }
        // 加速火苗
        // var that = this;
        // setInterval(function () {
        // 	if (that.setIntervalcount < 10) {
        // 		that.indexCar = that.arrayBtn[that.setIntervalcount].indexOf(Math.min.apply(Math, that.arrayBtn[that.setIntervalcount]));
        // 		that.carName[that.indexCar].speedUp()
        // 		that.setIntervalcount++;
        // 	}
        // }, 1500)
    };
    //背景小车
    GameScene.prototype.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        this.timeOnEnterFrame = egret.getTimer();
        this.countTemp++;
        if (pass > this.timeInterval * 2) {
            return;
        }
        if (this.countTemp >= 90) {
            this.scrollBg(pass);
        }
        if (this.count < this.array[0].length - 1) {
            if (this.countTemp % 90 == 0) {
                this.carRun();
            }
        }
        else {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }
    };
    GameScene.prototype.scrollBg = function (pass) {
        if (this.count < this.array[0].length - 1) {
            var delX = this.bgSpeed * pass;
            var topdelX = this.bgSpeed / 2 * pass;
            this.bg1.x += delX;
            this.bg2.x += delX;
            this.bgTop1.x += topdelX;
            this.bgTop2.x += topdelX;
            if (this.bg1.x > Global.stage.stageWidth) {
                this.bg1.x = 0;
                this.bg2.x = -Global.stage.stageWidth;
            }
            if (this.bgTop1.x > Global.stage.stageWidth) {
                this.bgTop1.x = 0;
                this.bgTop2.x = -Global.stage.stageWidth;
            }
        }
        else {
            this.bg3.x = 0;
        }
    };
    GameScene.prototype.carRun = function () {
        var _this = this;
        this.count++;
        if (this.count < 10) {
            console.log(this.count, this.arraySelect[this.count]);
            // var that = this;
            this.arraySelect[this.count].map(function (item) {
                if (item) {
                    _this.carName[item - 1].speedUp();
                }
            });
            for (var i = 0; i < 10; i++) {
                this.carName[i].startAnimation();
                console.log(this.count, this.arraySelect[this.count]);
                this.carName[i].fly(this.array[this.count][i], 214 + 56 + 64 * (9 - i), 1500);
                this.btnName[i].fly((this.arrayBtn[this.count][i] - 1) * 83.7 + 164, 106, 4000);
            }
        }
    };
    return GameScene;
}(eui.Component));
__reflect(GameScene.prototype, "GameScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameScene.js.map