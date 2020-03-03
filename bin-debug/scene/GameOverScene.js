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
    GameOverScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameOverScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return GameOverScene;
}(eui.Component));
__reflect(GameOverScene.prototype, "GameOverScene", ["eui.UIComponent", "egret.DisplayObject"]);
// class GameOverScene extends eui.Component implements  eui.UIComponent {
// 	private score:eui.BitmapLabel;
// 	private animation:egret.Tween;
// 	private button:eui.Button;
// 	private scoreNumber:string;
// 	private historyScore:eui.BitmapLabel;
// 	public constructor(score:string='0') {
// 		super();
// 		this.scoreNumber = score
// 	}
// 	protected partAdded(partName:string,instance:any):void
// 	{
// 		super.partAdded(partName,instance);
// 	}
// 	protected childrenCreated():void
// 	{
// 		super.childrenCreated();
// 		this.animation.play()
// 		this.score.text = this.scoreNumber
// 		let score = egret.localStorage.getItem('score') || 0
// 		if(parseInt(this.scoreNumber)>score){
// 			score = this.scoreNumber
// 			egret.localStorage.setItem('score',this.scoreNumber)
// 		}
// 		this.historyScore.text = score + ''
// 		console.log(score)
// 		this.button.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
// 			Global.addScene(new GameScene())
// 		},this)
// 	}
// } 
//# sourceMappingURL=GameOverScene.js.map