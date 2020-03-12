var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
全局类，提供场景的过渡和stage的引用
*/
var Global = (function () {
    function Global() {
    }
    Global.addScene = function (scene) {
        this.stage.addChild(scene);
    };
    Global.replaceScene = function (scene) {
        this.stage.removeChildren();
        this.stage.addChild(scene);
    };
    Global.painting = function (that, painting, item) {
        that.addChild(painting);
        painting.x = item.x;
        painting.y = item.y;
    };
    Global.written = function (that, textField, item) {
        textField.x = item.x;
        textField.y = item.y;
        textField.textColor = item.textColor;
        textField.text = item.text;
        textField.size = item.size;
        textField.fontFamily = item.fontFamily;
        textField.stroke = item.stroke ? item.stroke : '';
        textField.strokeColor = item.strokeColor ? item.strokeColor : '';
        that.addChild(textField);
    };
    return Global;
}());
__reflect(Global.prototype, "Global");
//# sourceMappingURL=Global.js.map