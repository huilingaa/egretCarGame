/*
全局类，提供场景的过渡和stage的引用
*/
class Global {
	public static stage: egret.Stage;

	public static addScene(scene: eui.UIComponent) {
		this.stage.addChild(scene)
	}
	public static replaceScene(scene: eui.UIComponent) {
		this.stage.removeChildren()
		this.stage.addChild(scene)
	}
	public static painting(that: any, painting: any, item: any) {
		that.addChild(painting);
		painting.x = item.x;
		painting.y = item.y;
	}
	public static written(that: any, textField: any, item: any) {
		textField.x = item.x;
		textField.y = item.y;
		textField.textColor = item.textColor;
		textField.text = item.text;
		textField.size = item.size;
		textField.fontFamily = item.fontFamily;
		textField.stroke = item.stroke ? item.stroke : '';
		textField.strokeColor = item.strokeColor ? item.strokeColor : '';
		that.addChild(textField);
	}
}