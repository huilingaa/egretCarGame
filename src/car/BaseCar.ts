
class BaseCar extends egret.DisplayObjectContainer {
	private timberInterval1: number
	private timberInterval2: number
	public timberInterval: any = [
		this.timberInterval1, this.timberInterval1];
	private rotations: number = 10
	public lun1: egret.Bitmap
	public lun2: egret.Bitmap
	public fire: egret.Bitmap
	public lunArray: any = [
		this.lun1, this.lun2];
	private async onAddToStage(event: egret.Event) {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
		await RES.loadConfig("resource/default.res.json", "resource/");
		await RES.loadGroup("preload");
	}

	public appear(x: number, y: number) {
		this.x = x
		this.y = y
	}

	public fly(x: number, y: number, speed: number) {
		egret.Tween.removeTweens(this)
		var tw = egret.Tween.get(this, {});
		tw.to({ x, y }, speed, egret.Ease.sineOut)
	}

	private startAnimation(): void {
		for (var j = 0; j < 2; j++) {
			if (this.timberInterval[j]) {
				clearInterval(this.timberInterval[j])
			}
			this.lunArray[j].rotation = 360
			this.timberInterval[j] = setInterval(() => {
				this.lunArray[0].rotation -= this.rotations
				this.lunArray[1].rotation -= this.rotations
			}, .2)
		}
	}
	// 加速火苗
	private speedUp(i): void {
		var that = this;
		this.fire = new egret.Bitmap();
		this.fire.texture = RES.getRes("fire_png");
		this.addChild(this.fire);
		this.fire.y = 30
		this.fire.x = 202
		setTimeout(function () {
			if (that.fire) {
				that.removeChild(that.fire);
			}
		}, 1500)
	}

	private speedClear(): void {
		this.removeChild(this.fire);
	}

	//初始化小车
	public onGroupComplete(i) {
		var img: egret.Bitmap = new egret.Bitmap();
		img.texture = RES.getRes('car' + (i + 1) + '_png');
		this.addChild(img);
		for (var j = 0; j < 2; j++) {
			this.lunArray[j] = new egret.Bitmap();
			this.lunArray[j].texture = RES.getRes("lun_png");
			this.addChild(this.lunArray[j]);
			this.lunArray[j].y = img.y + 32
			this.lunArray[j].anchorOffsetX = this.lunArray[j].width / 2
			this.lunArray[j].anchorOffsetY = this.lunArray[j].height / 2
			this.lunArray[j].x = this.lunArray[j].x + this.lunArray[j].anchorOffsetX;
			this.lunArray[j].y = this.lunArray[j].y + this.lunArray[j].anchorOffsetY;
		}
		this.lunArray[0].x = 15 + 29
		this.lunArray[1].x = 15 + 147
	}
}