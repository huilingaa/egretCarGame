var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tool = (function () {
    function tool() {
    }
    tool.prototype.random_num = function (min, max) {
        var Range = max - min;
        var Rand = Math.random();
        return (min + Math.round(Rand * Range));
    };
    tool.prototype.sortNumber = function (a, b) {
        return a - b;
    };
    tool.prototype.soo = function (temp) {
        var a = [];
        for (var i = 0; i < 10; i++) {
            a.push(this.arrayS(temp[i]));
        }
        return a;
    };
    tool.prototype.arrayS = function (temp) {
        for (var i = 0; i < 10; i++) {
            var s = JSON.parse(JSON.stringify(temp));
            var sortNum = s.sort(this.sortNumber);
            var aa = [];
            temp.map(function (item) {
                aa.push(sortNum.indexOf(item) + 1);
            });
            return aa;
        }
    };
    tool.prototype.array_max = function (arr) {
        var max = arr[0];
        for (var i in arr) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    };
    tool.prototype.reverse = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr[i].length; j++) {
                var temp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = temp;
            }
        }
        return arr;
    };
    tool.prototype.gitData = function () {
        this.array = new Array();
        this.arrayBtn = new Array();
        for (var i = 0; i < 10; i++) {
            this.array[i] = new Array();
            for (var j = 0; j < 9; j++) {
                this.array[i][j] = this.random_num(0, 900);
                this.array[i][9] = -this.random_num(243, 1080);
            }
        }
        var reverseNum = JSON.parse(JSON.stringify(this.array));
        var aa = this.reverse(reverseNum);
        this.arrayBtn = this.soo(aa);
        return { returna: this.array, returnb: this.arrayBtn, returnc: aa };
    };
    return tool;
}());
__reflect(tool.prototype, "tool");
//# sourceMappingURL=tool.js.map