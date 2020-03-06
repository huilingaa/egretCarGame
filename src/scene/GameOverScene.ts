class GameOverScene extends eui.Component implements eui.UIComponent {
	private gameOther: gameOther;
	public constructor() {
		super();
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.init()
	}
	//初始化
	private init() {
		this.gameOther = new gameOther()
		this.gameOther.onFont('20200221173', '11:45', 'playOver');
		this.addChild(this.gameOther)
		var btnAry = [];
		for (var i = 0; i < 10; i++) {
			btnAry[i] = new btnSort((i + 1) + '_png')
			btnAry[i].appear(102.9 * i + 79, 194)
			btnAry[i].setScale(1.2);
			this.addChild(btnAry[i])
		}
		var nameList = [3, 5, 10]
		this.initImg(nameList);
	}
	public initImg(nameList: any) {
		var num = [{
			x: 101, y: 676, scale: .66, fontX: 174, fontY: 390, width: 148, height: 140, //left
		}, {
			x: 702, y: 676, scale: .66, fontX: 767, fontY: 390, width: 148, height: 140, //right  #
		}, {
			x: 324, y: 676, scale: 1, fontX: 421, fontY: 348, width: 235, height: 233, //center  FBDB19

		},]
		var imgArr = []
		var fontArr = []
		num.forEach((item, index) => {
			// 图片
			imgArr[index] = new egret.Bitmap();
			imgArr[index].texture = RES.getRes("over" + nameList[index] + "_png");
			imgArr[index].scaleX = item.scale
			imgArr[index].scaleY = item.scale
			this.addChild(imgArr[index]);
			imgArr[index].y = item.y
			imgArr[index].x = item.x
			// 文字
			fontArr[index] = new egret.TextField()
			this.addChild(fontArr[index]);
			fontArr[index].text = nameList[index];
			fontArr[index].x = item.fontX
			fontArr[index].y = item.fontY + 4
			fontArr[index].fontFamily = 'PingFang SC'
			fontArr[index].size = [36, 36, 58][index];
			fontArr[index].textColor = [0xAFD0E2, 0xD48D55, 0xFBDB19][index];
			fontArr[index].strokeColor = [0x6791A5, 0xA4572A, 0xE7A200][index];
			fontArr[index].stroke = 1;
			fontArr[index].width = item.width;
			fontArr[index].height = item.height;
			fontArr[index].textAlign = egret.HorizontalAlign.CENTER;
			fontArr[index].verticalAlign = egret.VerticalAlign.MIDDLE;
		})
	}
}
