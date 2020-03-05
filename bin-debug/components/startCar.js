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
var startCar = (function (_super) {
    __extends(startCar, _super);
    function startCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    startCar.prototype.appear = function (x, y) {
        this.x = x;
        this.y = y;
    };
    startCar.prototype.fly = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return startCar;
}(BaseObject));
__reflect(startCar.prototype, "startCar");
//# sourceMappingURL=startCar.js.map