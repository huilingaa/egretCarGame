class GameStartScenea extends eui.Component implements eui.UIComponent {
	public btnName: any = []
	public startCar: any = []
	private gameOther: gameOther;
	public countDown: egret.TextField;
	public constructor() {
		super();
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.init()
	}
	//实例化场景和动画加载
	private init() {
		this.gameOther = new gameOther()
		this.gameOther.onFont('20200221173', '11:45', 'playStart');
		this.addChild(this.gameOther)
		this.toggleMusic();
		for (var i = 0; i < 10; i++) {
			this.btnName[i] = new btnSort((i + 1) + '_png')
			this.btnName[i].appear(102.9 * i + 79, 194)
			this.btnName[i].setScale(1.2);
			this.addChild(this.btnName[i])
			this.startCar[i] = new startCar('sCar' + (i + 1) + '_png')
			this.startCar[i].appear(108 * i + 52, 772)
			this.addChild(this.startCar[i])
		}
	}
	public tweenCar() {
		for (var i = 0; i < 3; i++) {
			this.startCar[i].fly(536, 540, 1000)
		}
		for (var i = 3; i < 7; i++) {
			this.startCar[i].fly(540, 540, 1000)
		}
		for (var i = 7; i < 10; i++) {
			this.startCar[i].fly(546, 540, 1000)
		}
		var countDown = setTimeout(function () {
			Global.replaceScene(new GameScene());
			clearInterval(countDown);
		}, 1000)
	}
	public toggleMusic() {
		var leftTime: egret.Bitmap = new egret.Bitmap();
		leftTime.texture = RES.getRes("lamp0_png");
		Global.painting(this, leftTime, { x: 297, y: 222 });
		this.countDown = new egret.TextField();
		Global.written(this, this.countDown, { x: 497, y: 523, textColor: 0xfffffff, text: '', size: 124, fontFamily: 'Arial Black' });
		var count = 4;
		var countLight = 0;
		var that = this;
		that.countDown.text = count.toString();
		var countDown = setInterval(function () {
			if (count > 0) {
				count--;
				countLight++;
				leftTime.texture = RES.getRes("lamp" + countLight + "_png");
				that.countDown.text = count.toString();
			} else {
				that.countDown.text = ""
				clearInterval(countDown);
				that.tweenCar();
			}
		}, 1000)
	}
}
