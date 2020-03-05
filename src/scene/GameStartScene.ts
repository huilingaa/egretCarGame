class GameStartScene extends eui.Component implements eui.UIComponent {
	// btn相关属性
	private btn1: btnSort;
	private btn2: btnSort;
	private btn3: btnSort;
	private btn4: btnSort;
	private btn5: btnSort;
	private btn6: btnSort;
	private btn7: btnSort;
	private btn8: btnSort;
	private btn9: btnSort;
	private btn10: btnSort;
	public btnName: any = [
		this.btn1, this.btn2, this.btn3,
		this.btn4, this.btn5, this.btn6,
		this.btn7, this.btn8, this.btn9, this.btn10];
	// 玩家赛车
	public startCarA: startCar;
	public startCarB: startCar;
	public startCarC: startCar;
	public startCarD: startCar;
	public startCarE: startCar;
	public startCarF: startCar;
	public startCarG: startCar;
	public startCarH: startCar;
	public startCarI: startCar;
	public startCarJ: startCar;
	public startCar: any = [
		this.startCarA, this.startCarB, this.startCarC,
		this.startCarD, this.startCarE, this.startCarF,
		this.startCarG, this.startCarH, this.startCarI, this.startCarJ];
	// 实例化
	private gameOther: gameOther;
	// public count: number = 3;
	public countDown: egret.TextField;
	// 项目公用方法
	public constructor() {
		super();
		this.toggleMusic();
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.init()

		this.setListeners()
	}
	private setListeners() {
		// this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
		// this.timeOnEnterFrame = egret.getTimer();
	}
	//实例化场景和动画加载
	private init() {
		this.gameOther = new gameOther()
		this.gameOther.onFont('20200221173', '11:45', 1);
		this.addChild(this.gameOther)

		for (var i = 0; i < 10; i++) {
			this.btnName[i] = new btnSort((i + 1) + '_png')
			this.btnName[i].appear(102.9 * i + 79, 194)
			this.btnName[i].setScale(1.2);
			this.addChild(this.btnName[i])

			this.startCar[i] = new btnSort('sCar' + (i + 1) + '_png')
			this.startCar[i].appear(108 * i + 52, 772)
			this.addChild(this.startCar[i])
		}
	}

	public toggleMusic() {
		// 图片
		var leftTime: egret.Bitmap = new egret.Bitmap();
		this.addChild(leftTime);
		leftTime.y = 222
		leftTime.x = 297
		var that = this;
		this.countDown = new egret.TextField();
		this.addChild(this.countDown);
		this.countDown.fontFamily = 'Arial Black'
		this.countDown.x = 497;
		this.countDown.y = 523;
		this.countDown.size = 124;
		var count = 3;
		var countLight = 0;
		leftTime.texture = RES.getRes("lamp0_png");
		that.countDown.text = count.toString();
		var countDown = setInterval(function () {
			if (count > 0) {
				count--;
				countLight++;
				leftTime.texture = RES.getRes("lamp" + countLight + "_png");
				that.countDown.text = count.toString();
			} else {
				clearInterval(countDown);
			}

		}, 1000)
	}

}
