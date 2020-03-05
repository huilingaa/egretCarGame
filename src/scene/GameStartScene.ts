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

	// 项目公用方法
	public constructor() {
		super();
		//创建一个计时器对象
		var timer: egret.Timer = new egret.Timer(500, 5);
		//注册事件侦听器
		timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
		timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
		//开始计时
		timer.start();
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.init()
		this.toggleMusic();
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
		leftTime.texture = RES.getRes("lamp2_png");
		this.addChild(leftTime);
		leftTime.y = 222
		leftTime.x = 297
		// 文字
		var text: egret.TextField = new egret.TextField();
		text.text = "3";
		text.size = 124;
		this.addChild(text);
		text.fontFamily = 'Arial Black'
		text.x = 497;
		text.y = 523;

	}

	private timerFunc() {
		console.log("计时");
	}
	private timerComFunc() {
		console.log("计时结束");
	}

}
