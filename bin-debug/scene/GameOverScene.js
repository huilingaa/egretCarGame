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
var GameOverScene = (function (_super) {
    __extends(GameOverScene, _super);
    function GameOverScene() {
        return _super.call(this) || this;
    }
    GameOverScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    //初始化
    GameOverScene.prototype.init = function () {
        this.gameOther = new gameOther();
        this.gameOther.onFont('20200221173', '11:45', 'playOver');
        this.addChild(this.gameOther);
        var btnAry = [];
        for (var i = 0; i < 10; i++) {
            btnAry[i] = new btnSort((i + 1) + '_png');
            btnAry[i].appear(102.9 * i + 79, 194);
            btnAry[i].setScale(1.2);
            this.addChild(btnAry[i]);
        }
        var nameList = [3, 5, 10];
        this.initImg(nameList);
    };
    GameOverScene.prototype.initImg = function (nameList) {
        var _this = this;
        var num = [{
                x: 101, y: 676, scale: .66, fontX: 174, fontY: 390, width: 148, height: 140,
            }, {
                x: 702, y: 676, scale: .66, fontX: 767, fontY: 390, width: 148, height: 140,
            }, {
                x: 324, y: 676, scale: 1, fontX: 421, fontY: 348, width: 235, height: 233,
            },];
        var imgArr = [];
        var fontArr = [];
        num.forEach(function (item, index) {
            // 图片
            imgArr[index] = new egret.Bitmap();
            imgArr[index].texture = RES.getRes("over" + nameList[index] + "_png");
            imgArr[index].scaleX = item.scale;
            imgArr[index].scaleY = item.scale;
            _this.addChild(imgArr[index]);
            imgArr[index].y = item.y;
            imgArr[index].x = item.x;
            // 文字
            fontArr[index] = new egret.TextField();
            _this.addChild(fontArr[index]);
            fontArr[index].text = nameList[index];
            fontArr[index].x = item.fontX;
            fontArr[index].y = item.fontY + 4;
            fontArr[index].fontFamily = 'PingFang SC';
            fontArr[index].size = [36, 36, 58][index];
            fontArr[index].textColor = [0xAFD0E2, 0xD48D55, 0xFBDB19][index];
            fontArr[index].strokeColor = [0x6791A5, 0xA4572A, 0xE7A200][index];
            fontArr[index].stroke = 1;
            fontArr[index].width = item.width;
            fontArr[index].height = item.height;
            fontArr[index].textAlign = egret.HorizontalAlign.CENTER;
            fontArr[index].verticalAlign = egret.VerticalAlign.MIDDLE;
        });
    };
    return GameOverScene;
}(eui.Component));
__reflect(GameOverScene.prototype, "GameOverScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameOverScene.js.map