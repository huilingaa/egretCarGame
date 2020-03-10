class GameScene extends eui.Component implements eui.UIComponent {
	private bg1: eui.Image;
	private bg2: eui.Image;
	private bg3: eui.Image;
	private bgTop1: eui.Image;
	private bgTop2: eui.Image;
	private bgSpeed: number = 1.4; //越大越快
	private gameOther: gameOther;
	public fire: egret.Bitmap
	private tool: tool;
	public gameOverScene: GameOverScene;
	public btnName: any = []
	public carName: any = []
	private timeInterval: number = 1 / 60 * 1000
	private timeOnEnterFrame: number = 0;//记录上一帧的时间
	public count: number = -1;
	public array: number[][];
	public arrayBtn: number[][];
	public arraySelect: number[][];
	public countTemp: number = 0;
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
		this.gameOther.onFont('20200221173', '11:45', 'playIng');
		this.addChild(this.gameOther)
		this.tool = new tool()
		var outSide = this.tool.gitData();
		this.array = outSide.returna//每次距离
		this.arrayBtn = outSide.returnb//排序编号
		console.log(this.array);
		egret.localStorage.setItem('arrayBtn', JSON.stringify(this.arrayBtn[9]));
		this.arraySelect = outSide.returnc//火苗
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
		this.scrollBg(pass)
		if (this.count < this.array[0].length - 1) {
			if (this.countTemp % 120 == 0 || this.countTemp == 4) {
				this.carRun();
			}
		} else {
			this.countTemp = 0;
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			var countDown = setTimeout(function () {
				Global.replaceScene(new GameOverScene());
				clearInterval(countDown);
			}, 2000)
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
			//加速火苗
			this.arraySelect[this.count].map(item => {
				if (item) {
					this.carName[item - 1].speedUp()
				}
			})
			for (var i = 0; i < 10; i++) {
				this.carName[i].startAnimation();//轮胎
				if (this.count == 9) {
					this.carName[i].fly(this.array[this.count][i], 214 + 56 + 64 * (9 - i), 2000)
				} else {
					this.carName[i].fly(1080 - this.array[this.count][i], 214 + 56 + 64 * (9 - i), 2000)
				}
				this.btnName[i].fly(1080 - (this.arrayBtn[this.count][i]) * 83.7 - 83.7, 106, 20000)
			}
		}
	}
}
