class startCar extends BaseObject {

	public appear(x: number, y: number) {
		this.x = x
		this.y = y
	}

	public fly(x: number, y: number, speed: number) {
		egret.Tween.removeTweens(this)
		egret.Tween.get(this, {}).
			to({ scaleX: 0.1, scaleY: 0.1, x, y }, 1000, egret.Ease.sineOut)
	}
}