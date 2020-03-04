class GameScene extends eui.Component implements eui.UIComponent {
	/*背景*/
	private bg1: eui.Image;
	private bg2: eui.Image;
	private bg3: eui.Image;
	private bgTop1: eui.Image;
	private bgTop2: eui.Image;
	private bgSpeed: number = 1.4; //越大越快
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
	public BaseCarA: BaseCar;
	public BaseCarB: BaseCar;
	public BaseCarC: BaseCar;
	public BaseCarD: BaseCar;
	public BaseCarE: BaseCar;
	public BaseCarF: BaseCar;
	public BaseCarG: BaseCar;
	public BaseCarH: BaseCar;
	public BaseCarI: BaseCar;
	public BaseCarJ: BaseCar;
	public carName: any = [
		this.BaseCarA, this.BaseCarB, this.BaseCarC,
		this.BaseCarD, this.BaseCarE, this.BaseCarF,
		this.BaseCarG, this.BaseCarH, this.BaseCarI, this.BaseCarJ];
	// 实例化
	private gameOther: gameOther;
	public fire: egret.Bitmap
	private tool: tool;
	public gameOverScene: GameOverScene;
	// 声明的数据
	private outSide: any;
	private timeInterval: number = 1 / 60 * 1000
	private timeOnEnterFrame: number = 0;//记录上一帧的时间
	public lockTouchMove: boolean;
	public lockTime: number = 100;
	public timeoutId: number;
	public indexCar: number;
	public arraySelect: number[][];

	public count: number = -1;
	public setIntervalcount: number = 0;
	private scores: egret.TextField
	public btn: number[][];
	public array: number[][];
	public arrayBtn: number[][];
	public countTemp: number = 0;
	// 项目公用方法
	public constructor() {
		super();
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.init()
		this.setListeners()
	}
	private setListeners() {
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
		this.timeOnEnterFrame = egret.getTimer();
	}
	//实例化场景和动画加载
	private init() {
		this.gameOther = new gameOther()
		this.gameOther.onFont('20200221173', '11:45');
		this.addChild(this.gameOther)
		this.tool = new tool()
		var outSide = this.tool.gitData();
		this.array = outSide.returna
		this.arrayBtn = outSide.returnb
		this.arraySelect = outSide.returnc
		console.log(this.arraySelect);
		//  console.log(this.array);
		//  console.log(this.arrayBtn);
		var distanceX = [144, 131, 119, 108, 96, 84, 78, 62, 50, 38];
		for (var i = 0; i < 10; i++) {
			this.carName[i] = new BaseCar()
			this.carName[i].appear(878 - distanceX[i], 214 + 56 + 64 * (9 - i));
			this.carName[i].onGroupComplete((i));
			this.addChild(this.carName[i])
			this.btnName[i] = new btnSort((i + 1) + '_png')
			this.btnName[i].appear(83.7 * i + 164, 106)
			this.addChild(this.btnName[i])
		}
		// 加速火苗
		// var that = this;
		// setInterval(function () {
		// 	if (that.setIntervalcount < 10) {
		// 		that.indexCar = that.arrayBtn[that.setIntervalcount].indexOf(Math.min.apply(Math, that.arrayBtn[that.setIntervalcount]));
		// 		that.carName[that.indexCar].speedUp()
		// 		that.setIntervalcount++;
		// 	}
		// }, 1500)
	}
	//背景小车
	private onEnterFrame(e: egret.Event) {
		var now = egret.getTimer();
		var time = this.timeOnEnterFrame;
		var pass = now - time;
		this.timeOnEnterFrame = egret.getTimer();
		this.countTemp++;
		if (pass > this.timeInterval * 2) {
			return
		}
		if (this.countTemp >= 90) {
			this.scrollBg(pass)
		}
		if (this.count < this.array[0].length - 1) {
			if (this.countTemp % 90 == 0) {
				this.carRun();
			}
		} else {
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}
	}


	private scrollBg(pass: number) {
		if (this.count < this.array[0].length - 1) {
			const delX = this.bgSpeed * pass
			const topdelX = this.bgSpeed / 2 * pass
			this.bg1.x += delX
			this.bg2.x += delX
			this.bgTop1.x += topdelX
			this.bgTop2.x += topdelX
			if (this.bg1.x > Global.stage.stageWidth) {
				this.bg1.x = 0
				this.bg2.x = -Global.stage.stageWidth
			}
			if (this.bgTop1.x > Global.stage.stageWidth) {
				this.bgTop1.x = 0
				this.bgTop2.x = -Global.stage.stageWidth
			}
		} else {
			this.bg3.x = 0
		}
	}


	private carRun() {

		this.count++;

		if (this.count < 10) {
			console.log(this.count, this.arraySelect[this.count]);
			// var that = this;
			this.arraySelect[this.count].map(item => { // item为数组的元素
				if (item) {
					this.carName[item - 1].speedUp()
				}

			})
			for (var i = 0; i < 10; i++) {
				this.carName[i].startAnimation();
				console.log(this.count, this.arraySelect[this.count]);

				this.carName[i].fly(this.array[this.count][i], 214 + 56 + 64 * (9 - i), 1500)
				this.btnName[i].fly((this.arrayBtn[this.count][i] - 1) * 83.7 + 164, 106, 4000)
			}

		}

	}
}
